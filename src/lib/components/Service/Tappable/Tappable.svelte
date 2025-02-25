<script context="module" lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { ANDROID } from '@sveltevk/vksui/lib/platform';
	import { getOffsetRect } from '@sveltevk/vksui/lib/offset';
	import Touch from '../Touch/Touch.svelte';
	// import type { TouchEventHandler, TouchEvent } from '../Touch/Touch.svelte';
	import { coordX, coordY } from '@sveltevk/vksui/lib/touch';
	import type { FocusVisibleMode } from '../FocusVisible/FocusVisible.svelte';

	export interface StorageItem {
		activeTimeout: number;
		timeout?: number;
		stop(): void;
	}

	export interface Storage {
		[index: string]: StorageItem;
	}

	export type GetStorage = () => StorageItem;

	const nowTs = () => +Date.now();

	export const ACTIVE_DELAY = 70;
	export const ACTIVE_EFFECT_DELAY = 600;

	let storage: Storage = {};

	/*
	 * Очищает таймауты и хранилище для всех экземпляров компонента, кроме переданного
	 */
	function deactivateOtherInstances(exclude?: string) {
		Object.keys(storage)
			.filter((id: string) => id !== exclude)
			.forEach((id: string) => {
				clearTimeout(storage[id].activeTimeout);
				clearTimeout(storage[id].timeout);
				storage[id].stop();

				delete storage[id];
			});
	}

	const TappableContextKey = 'vkui_tappableContext';
	type TappableContextInterface = { onHoverChange: (s: boolean) => void };
</script>

<script lang="ts">
	import FocusVisible from '../FocusVisible/FocusVisible.svelte';
	import Wave from './Wave.svelte';
	import { getContext, setContext } from 'svelte';
	import { noop } from 'svelte/internal';

	// props
	/**
	 * Длительность показа active-состояния
	 */
	export let activeEffectDelay: number = ACTIVE_EFFECT_DELAY;
	export let stopPropagation = false;
	export let Element = 'div';
	/**
	 * Указывает, должен ли компонент реагировать на hover-состояние
	 */
	export let hasHover = true;
	/**
	 * Указывает, должен ли компонент реагировать на active-состояние
	 */
	export let hasActive = true;
	/**
	 * Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active
	 */
	export let activeMode: 'opacity' | 'background' | string = 'background';
	/**
	 * Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover
	 */
	export let hoverMode: 'opacity' | 'background' | string = 'background';
	/**
	 * Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible
	 */
	export let focusVisibleMode: FocusVisibleMode | string = 'inside';
	$: _focusVisibleMode = focusVisibleMode as FocusVisibleMode;

	// state
	export let active = false;
	export let ts: number = null;
	export let deviceHasHover = true;

	interface IWave {
		x: number;
		y: number;
		id: string;
	}

	const { onHoverChange } =
		(getContext(TappableContextKey) as TappableContextInterface) ||
		({ onHoverChange: noop } as TappableContextInterface);
	const adaptivity = useAdaptivity();
	const platform = usePlatform();
	// const { focusVisible, onBlur, onFocus } = useFocusVisible();

	export let clicks: IWave[] = [];
	let childHover = false;
	let _hovered = false;

	$: hovered = _hovered && !$$props.disabled;
	$: _hasActive = _hasActive && !childHover && !$$props.disabled;
	$: _hasHover = deviceHasHover && hasHover && !childHover;
	$: isCustomElement = Element !== 'a' && Element !== 'button';
	$: isPresetHoverMode = ['opacity', 'background'].includes(hoverMode);
	$: isPresetActiveMode = ['opacity', 'background'].includes(activeMode);
	// TODO: $: isPresetFocusVisibleMode = ['inside', 'outside'].includes(focusVisibleMode);

	// export let hasHover: boolean;
	export let container: HTMLElement = undefined;

	// other
	const id = Math.round(Math.random() * 1e8).toString(16);
	let isSlide = false;
	let insideTouchRoot = false;

	// hover propagation
	setContext(TappableContextKey, { onHoverChange: (s: boolean) => (childHover = s) });

	$: {
		if (!hovered) {
			onHoverChange(false);
		} else {
			onHoverChange(true);
		}
	}

	/*
	 * Обрабатывает событие touchstart
	 */
	const onStart = ({ detail }) => {
		const { originalEvent } = detail;
		!insideTouchRoot && stopPropagation && originalEvent.stopPropagation();
		if (originalEvent.touches && originalEvent.touches.length > 1) {
			deactivateOtherInstances();
			return;
		}

		if ($platform === ANDROID) {
			const { top, left } = getOffsetRect(container);
			const x = coordX(originalEvent) - (left ?? 0);
			const y = coordY(originalEvent) - (top ?? 0);
			clicks = [...clicks, { x, y, id: Date.now().toString() }];
		}

		storage[id] = {
			stop: stop,
			activeTimeout: window.setTimeout(start, ACTIVE_DELAY)
		};
	};

	/*
	 * Обрабатывает событие touchmove
	 */
	const onMove = ({ detail }) => {
		const { originalEvent, shiftXAbs, shiftYAbs } = detail;

		!insideTouchRoot && stopPropagation && originalEvent.stopPropagation();
		if (shiftXAbs > 20 || shiftYAbs > 20) {
			isSlide = true;
			stop();
		}
	};

	/*
	 * Обрабатывает событие touchend
	 */
	const onEnd = ({ detail }) => {
		const { originalEvent } = detail;
		!insideTouchRoot && stopPropagation && originalEvent.stopPropagation();
		const now = nowTs();

		if (originalEvent.touches && originalEvent.touches.length > 0) {
			isSlide = false;
			stop();
			return;
		}

		if (active) {
			if (now - ts >= 100) {
				// Долгий тап, выключаем подсветку
				stop();
			} else {
				// Короткий тап, оставляем подсветку
				const timeoutT = window.setTimeout(stop, activeEffectDelay - now + ts);
				const store = getStorage();

				if (store) {
					store.timeout = timeoutT;
				}
			}
		} else if (!isSlide) {
			// Очень короткий тап, включаем подсветку
			start();

			const timeoutT = window.setTimeout(stop, activeEffectDelay);

			if (getStorage()) {
				clearTimeout(getStorage().activeTimeout);
				getStorage().timeout = timeoutT;
			}
		}

		isSlide = false;
	};

	/*
	 * Устанавливает активное выделение
	 */
	const start = () => {
		if (!active) {
			active = true;
			ts = nowTs();
		}
		deactivateOtherInstances(id);
	};

	/*
	 * Снимает активное выделение
	 */
	const stop = () => {
		if (active) {
			active = false;
			ts = null;
		}
		if (getStorage()) {
			clearTimeout(getStorage().activeTimeout);
			delete storage[id];
		}
	};

	/*
	 * Возвращает хранилище для экземпляра компонента
	 */
	const getStorage: GetStorage = () => {
		return storage[id];
	};

	$: $$restProps.class = classNames(
		$$props.class,
		getClassName('Tappable', $platform),
		_hasHover && hovered && !isPresetHoverMode && hoverMode,
		hasActive && active && !isPresetActiveMode && activeMode,
		// TODO: focusVisible && !isPresetFocusVisibleMode && focusVisibleMode,
		`Tappable--sizeX-${$adaptivity.sizeX}`,
		{
			'Tappable--active': hasActive && active,
			'Tappable--mouse': $adaptivity.hasMouse,
			[`Tappable--hover-${hoverMode}`]: _hasHover && hovered && isPresetHoverMode,
			[`Tappable--active-${activeMode}`]: hasActive && active && isPresetActiveMode
			// TODO: 'Tappable--focus-visible': focusVisible
		}
	);

	$: role = $$props.href ? 'link' : 'button';
</script>

<Touch
	on:enter={() => (_hovered = true)}
	on:leave={() => (_hovered = false)}
	tabIndex={isCustomElement && !$$props.disabled ? 0 : undefined}
	role={isCustomElement ? role : undefined}
	aria-disabled={isCustomElement ? $$props.disabled : undefined}
	bind:container
	on:start={$$props.disabled ? undefined : onStart}
	on:move={$$props.disabled ? undefined : onMove}
	on:end={$$props.disabled ? undefined : onEnd}
	on:click
	{Element}
	{...$$restProps}
>
	<slot />
	{#if $platform === ANDROID && !$adaptivity.hasMouse && _hasActive}
		<span aria-hidden="true" class="Tappable__waves">
			{#each clicks as wave}
				<Wave
					x={wave.x}
					y={wave.y}
					on:clear={() => (clicks = clicks.filter((c) => c.id !== wave.id))}
				/>
			{/each}
		</span>
	{/if}
	{#if _hasHover && hoverMode === 'background'}<span
			aria-hidden="true"
			class="Tappable__hoverShadow"
		/>{/if}
	{#if !$$props.disabled}
		<FocusVisible mode={_focusVisibleMode} />
	{/if}
</Touch>

<style>
	:global(.Tappable) {
		position: relative;
		cursor: pointer;
	}

	:global(.Tappable[disabled]),
	:global(.Tappable[aria-disabled='true']) {
		cursor: default;
	}

	:global(.Tappable--focus-visible) {
		outline: none;
	}

	/**
 * active
 * increased specificity to override CellButton styles
 */
	:global(.Tappable--active-background.Tappable--active-background.Tappable--active-background) {
		background: var(--background_highlighted);
	}

	:global(.Tappable--active-opacity.Tappable--active-opacity.Tappable--active-opacity) {
		opacity: 0.7;
	}

	/**
 * hover
 */
	.Tappable__hoverShadow {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		pointer-events: none;
		overflow: hidden;
		border-radius: inherit;
	}

	:global(.Tappable--hover-background) > .Tappable__hoverShadow {
		background: var(--background_hover);
	}

	:global(.Tappable--hover-opacity) {
		opacity: 0.8;
	}

	/**
 * mouse
 */
	:global(.Tappable--mouse) {
		transition: opacity 0.15s ease-out;
	}

	:global(.Tappable--mouse) .Tappable__hoverShadow {
		transition: background-color 0.15s ease-out;
	}

	/**
 * iOS tappable
 */
	:global(.Tappable--ios) {
		position: relative;
		border-radius: 10px;
		transition: background-color 0.15s ease-out;
	}

	:global(.Tappable--ios.Tappable--active-background) {
		transition: none;
	}

	/**
 * Android tappable
 */
	:global(.Tappable--android) {
		position: relative;
		transition: background-color 0.15s ease-out;
		border-radius: 8px;
	}

	.Tappable__waves {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		pointer-events: none;
		overflow: hidden;
		border-radius: inherit;
		/* Fix for Safari: css animation + border-radius + overflow ignores parent border-radius */
		will-change: transform;
	}

	/**
 * VKCOM tappable
 */
	:global(.Tappable--vkcom) {
		transition: background-color 0.15s ease-out;
		border-radius: 8px;
	}

	/**
 * overrides
 */
	:global(.Tappable--sizeX-compact) {
		border-radius: 0;
	}
</style>

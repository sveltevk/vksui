<script lang="ts">
	import { useAdaptivity } from '@sveltevk/vksui/hooks/useAdaptivity';
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';

	export let style = '';

	const adaptivity = useAdaptivity();
	const platform = usePlatform();
	// TODO: need more update
</script>

<!-- 
@component
Надстройка над `<input type="checkbox" />`. Компонент принимает все валидные для этого элемента свойства.
-->

<label
	class={classNames(
		getClassName('Switch', $platform),
		$$props.class,
		`Switch--sizeY-${$adaptivity.sizeY}`
	)}
	{style}
	role="presentation"
>
	<input {...$$restProps} type="checkbox" class="Switch__self" />
	<span class="Switch__pseudo" />
</label>

<style>
	.Switch {
		display: block;
	}

	.Switch__self {
		display: none;
	}

	.Switch__pseudo {
		position: relative;
		display: block;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		-webkit-tap-highlight-color: transparent;
	}

	.Switch__pseudo::before {
		position: absolute;
		content: '';
	}

	.Switch__self:checked + .Switch__pseudo::before {
		transform: translateX(20px);
	}

	/**
 * iOS
 */
	.Switch--ios .Switch__pseudo {
		width: 51px;
		height: 31px;
		border: 2px solid var(--switch_ios_off_border);
		background: transparent;
		border-radius: 15px;
		box-sizing: border-box;
		transition: background-color 0.2s ease, border-color 0.2s ease;
	}

	.Switch--ios.Switch--sizeY-compact .Switch__pseudo {
		width: 47px;
		height: 27px;
		border-radius: 13px;
	}

	.Switch--ios .Switch__self:checked + .Switch__pseudo {
		border-color: var(--accent);
		background: var(--accent);
	}

	.Switch--ios .Switch__self[disabled] + .Switch__pseudo {
		opacity: 0.4;
	}

	.Switch--ios .Switch__pseudo::before {
		top: 0;
		left: 0;
		width: 27px;
		height: 27px;
		border-radius: 13px;
		background: var(--white);
		box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15), 0 3px 1px rgba(0, 0, 0, 0.06),
			inset 0 0 0 0.5px rgba(0, 0, 0, 0.04);
		transition: transform 0.2s cubic-bezier(0.36, -0.24, 0.26, 1.32);
	}

	.Switch--ios.Switch--sizeY-compact .Switch__pseudo::before {
		width: 23px;
		height: 23px;
		border-radius: 11px;
	}

	.Switch--ios .Switch__self:checked + .Switch__pseudo::before {
		transform: translateX(20px);
	}

	/**
 * Android
 */

	.Switch--android,
	.Switch--vkcom {
		padding: 3px;
	}

	.Switch--android .Switch__pseudo {
		width: 34px;
		height: 14px;
		background: #c6c5c5;
		border-radius: 7px;
		transition: background-color 0.1s ease;
	}

	.Switch--android.Switch--sizeY-compact .Switch__pseudo {
		width: 32px;
		height: 12px;
		border-radius: 6px;
	}

	.Switch--android .Switch__self:checked + .Switch__pseudo {
		background: #a8bfdb;
	}

	.Switch--android .Switch__self[disabled] + .Switch__pseudo {
		opacity: 0.4;
	}

	.Switch--android .Switch__pseudo::before {
		top: -3px;
		left: -3px;
		width: 20px;
		height: 20px;
		background: #f1f1f1;
		border-radius: 10px;
		box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
		transition: transform 0.1s ease;
	}

	.Switch--android.Switch--sizeY-compact .Switch__pseudo::before {
		width: 18px;
		height: 18px;
		border-radius: 9px;
	}

	.Switch--android .Switch__self:checked + .Switch__pseudo::before {
		background: var(--accent);
	}

	.Switch--android.Switch--sizeY-compact .Switch__self:checked + .Switch__pseudo::before {
		transform: translateX(19px);
	}

	/**
 * VKCOM
 */

	.Switch--vkcom .Switch__pseudo {
		width: 28px;
		height: 10px;
	}

	.Switch--vkcom .Switch__pseudo::after {
		content: '';
		display: block;
		border-radius: 45px;
		transition: background-color 0.1s ease;
		width: 100%;
		height: 100%;
		background: var(--icon_tertiary);
		opacity: 0.48;
	}

	.Switch--vkcom .Switch__self:checked + .Switch__pseudo::after {
		background: var(--accent);
		opacity: 0.48;
	}

	.Switch--vkcom .Switch__self[disabled] + .Switch__pseudo {
		opacity: 0.4;
	}

	.Switch--vkcom .Switch__pseudo::before {
		top: -3px;
		left: -2px;
		width: 16px;
		height: 16px;
		background: var(--background_light);
		border: 1px solid var(--icon_tertiary);
		border-radius: 8px;
		box-sizing: border-box;
		transition: transform 0.1s ease;
		z-index: 1;
	}

	.Switch--vkcom .Switch__self:checked + .Switch__pseudo::before {
		background: var(--accent);
		border: none;
		transform: translateX(16px);
	}
</style>

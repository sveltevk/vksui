<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';
	import classNames from '@sveltevk/vksui/lib/classNames';
	import getClassName from '@sveltevk/vksui/lib/getClassName';

	/**
	 * Флаг для показа/скрытия верхней тени (Android) или границы (iOS)
	 */
	export let shadow = true;
	export let itemsLayout: 'vertical' | 'horizontal' = 'horizontal'; // TODO: режим 'auto'

	const platform = usePlatform();
</script>

<div
	{...$$restProps}
	class={classNames(
		$$restProps.class,
		getClassName('Tabbar', $platform),
		`Tabbar--l-${itemsLayout}`,
		{
			'Tabbar--shadow': shadow
		}
	)}
>
	<div class="Tabbar__in"><slot /></div>
</div>

<style>
	.Tabbar {
		position: fixed;
		z-index: 2;
		bottom: 0;
		left: 0;
		width: 100%;
		height: var(--tabbar_height);
		padding-bottom: var(--safe-area-inset-bottom);
		box-sizing: content-box;
		background: var(--header_alternate_background);
	}

	.Tabbar__in {
		display: flex;
		justify-content: center;
		overflow: hidden;
	}

	/**
 * iOS
 */

	.Tabbar--ios.Tabbar--shadow::before {
		position: absolute;
		bottom: 100%;
		left: 0;
		width: 100%;
		height: 1px;
		background: var(--separator_common);
		transform-origin: center bottom;
		content: '';
	}

	@media (min-resolution: 2dppx) {
		.Tabbar--ios::before {
			transform: scaleY(0.5);
		}
	}

	@media (min-resolution: 3dppx) {
		.Tabbar--ios::before {
			transform: scaleY(0.33);
		}
	}

	/**
 * Android & VKCOM
 */

	.Tabbar--android.Tabbar--shadow,
	.Tabbar--vkcom.Tabbar--shadow {
		box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.06), 0 0 2px 0 rgba(0, 0, 0, 0.08);
	}
</style>

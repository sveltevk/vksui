<script lang="ts">
	import { usePlatform } from '@sveltevk/vksui/hooks/usePlatform';

	import getClassName from '@sveltevk/vksui/lib/getClassName';
	import { classNames } from '@vkontakte/vkjs';

	import PopoutRoot from '../../Popouts/PopoutRoot/PopoutRoot.svelte';

	export let isPopout = Boolean($$slots.popout);
	export let isModal = Boolean($$slots.modal);

	const platform = usePlatform();
</script>

<PopoutRoot class={getClassName('SplitLayout', $platform)} {isPopout} {isModal}>
	<slot name="popout" slot="popout" />
	<slot name="modal" slot="modal" />
	<slot name="header" />
	<div
		{...$$restProps}
		class={classNames($$restProps.class, 'SplitLayout__inner', {
			'SplitLayout__inner--header': $$slots.header
		})}
	>
		<slot />
	</div>
</PopoutRoot>

<style>
	:global(.SplitLayout) {
		width: 100%;
		height: 100%;
		position: relative;
		font-family: var(--font-common);
	}

	.SplitLayout__inner {
		width: 100%;
		height: 100%;
		display: flex;
	}

	/* Hack with using PanelHeaderSimple */
	/* Better to implement simple header-like here */
	.SplitLayout__inner--header {
		position: relative;
		z-index: 11;
	}

	:global(.SplitLayout--ios) .SplitLayout__inner--header {
		margin-top: calc(-1 * calc(var(--panelheader_height_ios) + var(--safe-area-inset-top)));
	}

	:global(.SplitLayout--android) .SplitLayout__inner--header,
	:global(.SplitLayout--vkcom) .SplitLayout__inner--header {
		margin-top: calc(-1 * var(--panelheader_height_android));
	}

	.SplitLayout__popout {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 100;
		width: 100%;
		height: 100%;
	}

	.SplitLayout__modal {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
		width: 100%;
		height: 100%;
	}

	.SplitLayout__modal:empty {
		display: none;
	}
</style>

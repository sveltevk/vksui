<script lang="ts">
	import classNames from '@sveltevk/vksui/lib/classNames';

	export let mode: 'tint' | 'white' | 'black' = 'tint';
	export let to: 'top' | 'bottom' = 'top';
</script>

<div
	{...$$restProps}
	class={classNames('Gradient', `Gradient--md-${mode}`, `Gradient--to-${to}`, $$props.class)}
>
	<slot />
</div>

<style>
	.Gradient--md-tint.Gradient--to-top {
		background: linear-gradient(
			to top,
			#f5f5f5,
			rgba(245, 245, 245, 0.98),
			rgba(245, 245, 245, 0.94),
			rgba(245, 245, 245, 0.88),
			rgba(245, 245, 245, 0.8),
			rgba(245, 245, 245, 0.71),
			rgba(245, 245, 245, 0.61),
			rgba(245, 245, 245, 0.5),
			rgba(245, 245, 245, 0.39),
			rgba(245, 245, 245, 0.29),
			rgba(245, 245, 245, 0.2),
			rgba(245, 245, 245, 0.12),
			rgba(245, 245, 245, 0.06),
			rgba(245, 245, 245, 0.02),
			rgba(245, 245, 245, 0)
		);
	}

	.Gradient--md-tint.Gradient--to-bottom {
		background: linear-gradient(
			to bottom,
			#f5f5f5,
			rgba(245, 245, 245, 0.98),
			rgba(245, 245, 245, 0.94),
			rgba(245, 245, 245, 0.88),
			rgba(245, 245, 245, 0.8),
			rgba(245, 245, 245, 0.71),
			rgba(245, 245, 245, 0.61),
			rgba(245, 245, 245, 0.5),
			rgba(245, 245, 245, 0.39),
			rgba(245, 245, 245, 0.29),
			rgba(245, 245, 245, 0.2),
			rgba(245, 245, 245, 0.12),
			rgba(245, 245, 245, 0.06),
			rgba(245, 245, 245, 0.02),
			rgba(245, 245, 245, 0)
		);
	}

	:global(body[scheme='space_gray']) .Gradient--md-tint.Gradient--to-top {
		background: linear-gradient(
			to top,
			#232324,
			rgba(35, 35, 36, 0.98),
			rgba(35, 35, 36, 0.94),
			rgba(35, 35, 36, 0.88),
			rgba(35, 35, 36, 0.8),
			rgba(35, 35, 36, 0.71),
			rgba(35, 35, 36, 0.61),
			rgba(35, 35, 36, 0.5),
			rgba(35, 35, 36, 0.39),
			rgba(35, 35, 36, 0.29),
			rgba(35, 35, 36, 0.2),
			rgba(35, 35, 36, 0.12),
			rgba(35, 35, 36, 0.06),
			rgba(35, 35, 36, 0.02),
			rgba(35, 35, 36, 0)
		);
	}

	:global(body[scheme='space_gray']) .Gradient--md-tint.Gradient--to-bottom {
		background: linear-gradient(
			to bottom,
			#232324,
			rgba(35, 35, 36, 0.98),
			rgba(35, 35, 36, 0.94),
			rgba(35, 35, 36, 0.88),
			rgba(35, 35, 36, 0.8),
			rgba(35, 35, 36, 0.71),
			rgba(35, 35, 36, 0.61),
			rgba(35, 35, 36, 0.5),
			rgba(35, 35, 36, 0.39),
			rgba(35, 35, 36, 0.29),
			rgba(35, 35, 36, 0.2),
			rgba(35, 35, 36, 0.12),
			rgba(35, 35, 36, 0.06),
			rgba(35, 35, 36, 0.02),
			rgba(35, 35, 36, 0)
		);
	}
</style>

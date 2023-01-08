<script lang="ts">
	import { selectedImage } from './imageStore';
</script>

<div
	class={`
            ${$selectedImage ? '' : 'opacity-0 pointer-events-none'}
            bg-neutral-900
            bg-opacity-90
            fixed
            p-2
            sm:p-8
            inset-0
            max-h-screen
            max-w-screen
            grid
            place-content-center
            transition
            cursor-pointer
        `}
	on:click={() => selectedImage.update(() => null)}
	on:keyup
>
	<img
		src={$selectedImage ?? ''}
		alt=""
		class={`
            bg-white
            max-h-full
            rounded-3xl
            ring-white
            ring-8
            transition
            ${$selectedImage ? '' : 'opacity-0 pointer-events-none'}
        `}
	/>
</div>

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
    srcset={$selectedImage ?? ''}
        sizes="(max-width: 640px) 480px,
            (max-width: 768px) 720px,
            (max-width: 1024px) 960px,
            (max-width: 1280px) 1280px,
            (max-width: 1536px) 1920px,
            2560px"
		alt=""
            class={`
            min-w-[200px]
            min-h-[200px]
            mx-auto
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

<script lang="ts">
	import { onMount } from 'svelte';
	export let index: number;
	export let src: string;
	export let loader: string;
	export let alt: string = '';
	export let date: Date | null = new Date(Date.now());
	import { selectedImage } from './imageStore';

	let loaded = false;
	let thisImage: HTMLImageElement;

	onMount(() => {
		thisImage.onload = () => {
			loaded = true;
		};
		setTimeout(() => {
			if (!loaded) {
				loaded = true;
			}
		}, index * 100);
	});
</script>

<button
	class={`             
        relative
        bg-center
        tranistion
        duration-500
        bg-neutral-100
        cursor-pointer
        hover:scale-95
        transition
        rounded-lg
        bg-cover
    `}
	style={`background-image: url(${loader});`}
	on:click={() => selectedImage.update(() => src)}
	on:keyup={() => selectedImage.update(() => src)}
>
	<img
		src={loader}
		bind:this={thisImage}
		srcset={src}
		sizes="(max-width: 640px) 480px,
            (max-width: 768px) 480px,
            (max-width: 1024px) 480px,
            (max-width: 1280px) 480px,
            (max-width: 1536px) 480px,
            1280px"
		{alt}
		class={`
            ${loaded ? 'opacity-100' : 'opacity-0'}
            w-full
            aspect-square
            object-cover
            tranistion
            duration-1000
            rounded-lg
        `}
		loading="lazy"
		decoding="async"
	/>
	<span
		class={`
            ${loaded ? 'opacity-100' : 'opacity-0'}
            select-none
            cursor-default
            absolute
            bottom-2
            right-2
            p-1
            text-xs
            font-mono
            rounded
            leading-none
            font-medium
            bg-white
            bg-opacity-90
            text-slate-700
            tranistion
            duration-1000
            delay-500
        `}
	>
		{date ? date.toLocaleDateString() : 'Unknown'}
	</span>
</button>

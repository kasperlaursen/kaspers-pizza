<script lang="ts">
	export let src: string;
	export let alt: string = 'Pizza';
	export let date: Date | null = new Date(Date.now());

	import { onMount } from 'svelte';
	import { selectedImage } from './imageStore';

	let loaded = false;
	let thisImage: HTMLImageElement;

	onMount(() => {
		thisImage.onload = () => {
			console.log('LOADED!');
			loaded = true;
		};
	});
</script>

<button
	class={`
        bg-opacity-100
        ${loaded ? 'bg-opacity-0' : ''}
        relative
        bg-contain
        bg-center
        tranistion
        duration-500
        bg-neutral-100
        cursor-pointer
        hover:scale-95
        transition
        rounded-lg
    `}
	on:click={() => selectedImage.update(() => src)}
	on:keyup={() => selectedImage.update(() => src)}
>
	<img
		{src}
		{alt}
		bind:this={thisImage}
		class={`
            opacity-0
            ${loaded ? 'opacity-100' : ''}
            w-full
            aspect-square
            object-cover
            tranistion
            duration-1000
            rounded-lg
        `}
	/>
	<span
		class={`
            opacity-0
            ${loaded ? 'opacity-100' : ''}
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

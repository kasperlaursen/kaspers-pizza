<script lang="ts">
	export let src: string;
	export let alt: string = '';
	export let date: Date | null = new Date(Date.now());
	import { selectedImage } from './imageStore';


</script>

<button
	class={`
        bg-opacity-100
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
        srcset={src}
        sizes="(max-width: 640px) 480px,
            (max-width: 768px) 480px,
            (max-width: 1024px) 480px,
            (max-width: 1280px) 480px,
            (max-width: 1536px) 480px,
            1280px"
		{alt}
		class={`
            opacity-100
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
            opacity-100
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

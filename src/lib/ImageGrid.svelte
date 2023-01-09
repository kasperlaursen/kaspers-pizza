<script lang="ts">
	import Image from './Image.svelte';
	import type { ImageGridItem } from './types';
	export let images: ImageGridItem[];
</script>

<section
	class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gid-cols-4 
	rounded-2xl gap-4 p-4 border-2 border-slate-200 relative overflow-x-hidden"
>
	{#each images as image, index}
		<Image src={image.imageUrl} {index} loader={image.loader} date={image.date} />
	{/each}
</section>

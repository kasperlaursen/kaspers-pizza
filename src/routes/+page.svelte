<script lang="ts">
	import ImageGrid from '$lib/ImageGrid.svelte';
	import Modal from '$lib/Modal.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let { images } = data;
</script>

<main class="container mx-auto grid py-8 gap-8 px-2">
	<h1 class="text-3xl font-semibold text-center text-slate-700">🍕 Kaspers Pizzza 🍕</h1>
	<ImageGrid images={images ?? []} />
</main>
<Modal />

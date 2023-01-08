import type { ImageGridItem } from '$lib/types';
import type { Load } from '@sveltejs/kit';

export const load: Load = async (event) => {
	const imageModules = import.meta.glob('../images/*.jpeg');
	const imageModuleArray = Object.entries(imageModules);
	const imagePromises = imageModuleArray.map(([key, imageModule]) => imageModule());
	const imageResults = await Promise.all(imagePromises);
	const images: ImageGridItem[] = (imageResults as { default: string }[])
		.map(({ default: imageUrl }, index) => {
			const imageNameArray = imageModuleArray[index][0].split('/');
			const imageName = imageNameArray[imageNameArray.length - 1].split('.')[0];
			const date = new Date(imageName);
			return { imageUrl, date };
		})
		.sort((a, b) => b.date.getTime() - a.date.getTime());
	return { images };
};

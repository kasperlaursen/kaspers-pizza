import type { ImageGridItem } from '$lib/types';
import type { Load } from '@sveltejs/kit';

export const load: Load = async (event) => {
	const imageModules = import.meta.glob('../images/*.(jpeg|jpg)', {
		query: {
			format: 'webp;jpg',
			width: '10,480;720;960;1280;1920;2560',
			picture: false,
			srcset: true
		},
		import: 'default',
		eager: true
	});
	const imageModuleArray = Object.entries(imageModules);
	const images: ImageGridItem[] = imageModuleArray
		.map(([filePath, srcset]) => {
			const imageUrl = typeof srcset === 'string' ? srcset : '';
			const imageNameArray = filePath.split('/');
			const imageName = imageNameArray[imageNameArray.length - 1].split('.')[0];
			const date = new Date(imageName);
			const loader = imageUrl.split(',')[0].replace(' 10w', '');
			return { imageUrl, date, loader };
		})
		.sort((a, b) => b.date.getTime() - a.date.getTime())
		.filter(({ imageUrl }) => Boolean(imageUrl));

	return { images };
};

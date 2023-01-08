import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { Load } from '@sveltejs/kit';

export const load: Load = async (event) => {
	const { supabaseClient } = await getSupabase(event);

	const { data, error } = await supabaseClient.storage.from('pizza').list(undefined, {
		limit: 100,
		offset: 0,
		sortBy: { column: 'name', order: 'desc' }
	});

	if (data) {
		const imageNames = data.map((image) => image.name);
		const { data: images, error: imageError } = await supabaseClient.storage
			.from('pizza')
			.createSignedUrls(imageNames, 24 * 60 * 60);

		console.log({ images, error });

		return {
			images: images?.map(({ signedUrl, path }) => {
				const imageName = path?.split('.')[0];
				const date = imageName ? new Date(imageName) : null;
				return {
					imageUrl: signedUrl,
					date: date
				};
			}),
			error: imageError
		};
	}
	return {
		error
	};
};

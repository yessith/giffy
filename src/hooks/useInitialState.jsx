import { useState } from 'react';

export function useInitialState() {
	const [gifs, setGifs] = useState([]);

	const findGif = (giphyId) => {
		const gif = gifs.find(({ id }) => id === giphyId);
		const { id, images, title } = gif;
		const imageUrl = images.downsized_medium.url;
		return { id, imageUrl, title };
	};

	return { gifs, setGifs, findGif };
}

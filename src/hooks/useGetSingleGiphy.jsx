import { useEffect, useContext, useState, useMemo } from 'react';
import { GiphyContext } from 'context/GiphyContext';

export function useGetSingleGiphy({ gifId }) {
	const [gif, setGif] = useState({});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const { gifs } = useContext(GiphyContext);

	const singleGifCache = useMemo(() => gifs.find(({ id }) => id === gifId), [gifId, gifs]);

	useEffect(() => {
		setLoading(true);
		try {
			if (!singleGifCache) {
				const getLocalStorage = localStorage.getItem('lastGif');
				const parseData = JSON.parse(getLocalStorage);
				setGif(parseData);
				setLoading(false);
			} else {
				const { title, images } = singleGifCache;
				const { url } = images.downsized_medium;
				const dataGif = { title, url };
				setGif(dataGif);
				const stringDataGif = JSON.stringify(dataGif);
				localStorage.setItem('lastGif', stringDataGif);
				setLoading(false);
			}
		} catch (error) {
			console.log('Ooops, error', error.message);
			setError(error.message);
		}
	}, [gifId, singleGifCache]);

	return { gif, loading, error };
}

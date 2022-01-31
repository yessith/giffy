import { useEffect, useContext } from 'react';
import { GiphyContext } from 'context/GiphyContext';

export function useFetchData({ apiUrl }) {
	const { gifs, setGifs, setLoading, setError } = useContext(GiphyContext);

	useEffect(() => {
		setLoading(true);
		const searchGiphy = async () => {
			try {
				const response = await fetch(apiUrl);
				const gif = await response.json();
				const { data } = gif;
				console.log(data);
				setGifs(data);
				setLoading(false);
			} catch (error) {
				console.log('Ooops, error', error.message);
				setError(error.message);
			}
		};

		searchGiphy();
	}, [apiUrl]);

	return { gifs };
}

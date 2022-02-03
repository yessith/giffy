import { useEffect, useContext, useState } from 'react';
import { GiphyContext } from 'context/GiphyContext';

// UTILS
import { API_KEY } from 'utils/settings';
import { API_URL } from 'utils/settings';

export function useGetGiphy({ limit = 10, query }) {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const { page, INITIAL_PAGE, setGifs } = useContext(GiphyContext);

	const trendingUrl = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${
		page * limit
	}&rating=g`;
	const resultSearchUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${
		page * limit
	}&rating=g&lang=en`;

	const apiUrl = !query ? trendingUrl : resultSearchUrl;

	useEffect(() => {
		setLoading(true);
		const searchGiphy = async () => {
			try {
				const response = await fetch(apiUrl);
				const gif = await response.json();
				const { data } = gif;
				setGifs(data);
				setLoading(false);
			} catch (error) {
				console.log('Ooops, error', error.message);
				setError(error.message);
			}
		};

		searchGiphy();
	}, [query]);

	useEffect(() => {
		if (page === INITIAL_PAGE) return;
		setLoading(true);
		const searchGiphy = async () => {
			try {
				const response = await fetch(apiUrl);
				const gif = await response.json();
				const { data } = gif;
				setGifs((prevGifs) => [...prevGifs, ...data]);
				setLoading(false);
			} catch (error) {
				console.log('Ooops, error', error.message);
				setError(error.message);
			}
		};

		searchGiphy();
	}, [page]);

	return { loading, error };
}

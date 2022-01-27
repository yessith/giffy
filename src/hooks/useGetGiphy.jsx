import { useEffect, useContext } from 'react';
import { GiphyContext } from 'context/GiphyContext';
import { fetchData } from 'utils/fetchData';
import { API_KEY } from 'utils/settings';
import { API_URL } from 'utils/settings';

export function useGetGiphy(query) {
	const { setGifs, setLoading, setError } = useContext(GiphyContext);

	useEffect(() => {
		setLoading(true);
		const searchGiphy = () => {
			const trendingUrl = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`;
			const resultSearchUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;

			const apiUrl = !query ? trendingUrl : resultSearchUrl;
			try {
				fetchData(apiUrl).then((gif) => {
					const { data } = gif;
					setGifs(data);
					setLoading(false);
				});
			} catch (error) {
				console.log('Ooops, error', error.message);
				setError(error.message);
			}
		};

		searchGiphy();
	}, [query]);
}

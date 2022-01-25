import { useEffect, useState, useContext } from 'react';
import { GiphyContext } from '../context/GiphyContext';
import { fetchData } from '../utils/fetchData';

export function useGetGiphy(query) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const { setGifs } = useContext(GiphyContext);
	const apiKey = 'CCxSj2JLOz6Sfqn3czLBVK8kDmNRB1vf';

	useEffect(() => {
		setLoading(true);
		const searchGiphy = () => {
			const trendingUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=g`;

			const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=g&lang=en`;

			const apiUrl = !query ? trendingUrl : searchUrl;
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

	return { loading, error };
}

import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';

export function useGiphyItem(query) {
	const [gifs, setGifs] = useState([]);
	const [loading, setLoading] = useState(false);
	const apiKey = 'CCxSj2JLOz6Sfqn3czLBVK8kDmNRB1vf';

	useEffect(() => {
		setLoading(true);
		const searchGiphy = () => {
			const trendingUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=g`;
			const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
			const apiUrl = !query ? trendingUrl : searchUrl;

			fetchData(apiUrl).then((gif) => {
				const { data } = gif;
				setGifs(data);
				setLoading(false);
			});
		};

		searchGiphy();
	}, [query]);

	return { gifs, loading };
}

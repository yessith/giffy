import { useEffect, useContext, useState } from 'react';
import { GiphyContext } from '../context/GiphyContext';
import { fetchData } from '../utils/fetchData';
import { API_KEY } from '../utils/settings';
import { API_URL } from '../utils/settings';

export function useGetTrending() {
	const [trending, setTrending] = useState([]);
	const { setLoading, setError } = useContext(GiphyContext);

	useEffect(() => {
		setLoading(true);
		const searchGiphy = () => {
			const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`;
			try {
				fetchData(apiUrl).then((gif) => {
					const { data } = gif;
					setTrending(data);
					setLoading(false);
				});
			} catch (error) {
				console.log('Ooops, error', error.message);
				setError(error.message);
			}
		};

		searchGiphy();
	}, []);
	return { trending };
}

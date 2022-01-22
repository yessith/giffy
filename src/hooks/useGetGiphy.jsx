import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';

export const useGetGiphy = (url) => {
	const [results, setResults] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!url) return;
		const getData = async () => {
			setLoading(true);
			setError(null);
			try {
				const data = await fetchData(url);
				setResults([data]);
				setLoading(false);
			} catch (error) {
				console.log('Ooops, error', error.message);
				setError(error.message);
			}
		};

		getData();
	}, [url]);

	return { results, loading, error };
};

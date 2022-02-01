import { useEffect, useState } from 'react';

export function useFetchData({ apiUrl }) {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			try {
				const response = await fetch(apiUrl);
				const results = await response.json();
				const { data } = results;
				setData(data);
				setLoading(false);
			} catch (error) {
				console.log('Ooops, error', error.message);
				setError(error.message);
			}
		};

		fetchData();
	}, [apiUrl]);

	return { data, loading, error };
}

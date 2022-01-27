import { useEffect, useState } from 'react';
import { fetchData } from 'utils/fetchData';
import { API_KEY } from 'utils/settings';
import { API_URL } from 'utils/settings';

export function useGetTrendingTerms() {
	const [trends, setTrends] = useState([]);

	useEffect(() => {
		const searchGiphy = () => {
			const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`;

			fetchData(apiUrl).then((gif) => {
				const { data } = gif;
				setTrends(data);
			});
		};

		searchGiphy();
	}, []);
	return { trends };
}

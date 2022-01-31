import { useState } from 'react';

const INITIAL_PAGE = 0;

export function useInitialState() {
	const [gifs, setGifs] = useState([]);
	const [page, setPage] = useState(INITIAL_PAGE);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	return {
		gifs,
		page,
		loading,
		error,
		setGifs,
		setPage,
		setLoading,
		setError,
	};
}

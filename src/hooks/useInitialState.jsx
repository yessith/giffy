import { useState } from 'react';

const INITIAL_PAGE = 0;

export function useInitialState() {
	const [gifs, setGifs] = useState([]);
	const [page, setPage] = useState(INITIAL_PAGE);

	return {
		gifs,
		page,
		INITIAL_PAGE,
		setGifs,
		setPage,
	};
}

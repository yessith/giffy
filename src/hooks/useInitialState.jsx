import { useState, useCallback } from 'react';

const INITIAL_PAGE = 0;

export function useInitialState() {
	const [gifs, setGifs] = useState([]);
	const [page, setPage] = useState(INITIAL_PAGE);

	const getCurrentLocation = useCallback(() => {
		const location = window.location.pathname;
		const currentLocation =
			location === '/' ? '/' : location.slice(1).toLocaleLowerCase().split('/')[1];
		return currentLocation;
	}, []);

	const path = getCurrentLocation();

	return {
		gifs,
		page,
		path,
		INITIAL_PAGE,
		setGifs,
		setPage,
	};
}

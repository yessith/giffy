import { useState } from 'react';

export function useInitialState() {
	const [gifs, setGifs] = useState([]);

	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	return {
		gifs,
		loading,
		error,
		setGifs,
		setLoading,
		setError,
	};
}

import { useRef, useState } from 'react';
import { useLocation } from 'wouter';

export function useGetInput() {
	const [query, setQuery] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [path, setLocation] = useLocation('');
	const inputRef = useRef('');

	const onSubmitQuery = (event) => {
		if (!query) return null;
		event.preventDefault();
		setLocation(`/search/${query}`);
		inputRef.current.value = '';
	};

	const onGetQuery = () => {
		const keyword = inputRef.current.value;
		setQuery(keyword);
	};
	return { inputRef, onGetQuery, onSubmitQuery };
}

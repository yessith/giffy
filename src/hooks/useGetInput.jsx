import { useRef, useState } from 'react';
import { useLocation } from 'wouter';

export function useGetInput() {
	const [query, setQuery] = useState('');
	const [path, setLocation] = useLocation('');
	const inputRef = useRef('');

	const onSubmitQuery = (event) => {
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

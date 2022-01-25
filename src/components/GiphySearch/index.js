import { useRef, useState } from 'react';
import { useLocation } from 'wouter';
import './GiphySearch.css';

export function GiphySearch() {
	const [query, setQuery] = useState('');
	const [path, setLocation] = useLocation('');
	const refQuery = useRef(null);

	const searchQuery = (event) => {
		event.preventDefault();
		setLocation(`/search/${query}`);
		refQuery.current.value = '';
	};

	const getQuery = () => {
		const keyword = refQuery.current.value;
		setQuery(keyword);
	};

	return (
		<form onSubmit={searchQuery} className='giphySearch'>
			<input
				onChange={getQuery}
				className='giphySearch-input'
				type='text'
				placeholder='Search a gif here...'
				ref={refQuery}
			/>
		</form>
	);
}

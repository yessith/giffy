import { useGetInput } from 'hooks/useGetInput';
import './GiphySearch.css';

export function GiphySearch() {
	const { inputRef, onGetQuery, onSubmitQuery } = useGetInput();

	return (
		<form onSubmit={onSubmitQuery} className='giphySearch'>
			<button className='giphySearch-btn'>Search</button>
			<input
				onChange={onGetQuery}
				className='giphySearch-input'
				type='text'
				placeholder='Search a gif here...'
				ref={inputRef}
			/>
		</form>
	);
}

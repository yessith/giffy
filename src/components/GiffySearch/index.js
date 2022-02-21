import { useGetInput } from 'hooks/useGetInput';
import './GiffySearch.css';

export function GiffySearch() {
	const { inputRef, onGetQuery, onSubmitQuery } = useGetInput();

	return (
		<div className='content-form'>
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
		</div>
	);
}

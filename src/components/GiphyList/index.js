import './GiphyList.css';

export function GiphyList({ children }) {
	return (
		<main className='app-content'>
			<section className='listGif'>{children()}</section>
		</main>
	);
}

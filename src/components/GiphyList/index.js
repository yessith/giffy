import { useContext } from 'react';
import { GiphyContext } from 'context/GiphyContext';
import { useGetLocation } from 'hooks/useGetLocation ';
import './GiphyList.css';

export function GiphyList({ children }) {
	const { currentLocation } = useGetLocation();
	const { setPage } = useContext(GiphyContext);
	const path = currentLocation();

	const handleNextPage = () => {
		setPage((prevPage) => prevPage + 1);
	};

	return (
		<main className='app-content'>
			<h1>{path === '/' ? `Today's trending list` : `Results for ${path} `}</h1>
			<section className='listGif'>{children()}</section>
			<button onClick={handleNextPage}>Load more Giff</button>
		</main>
	);
}

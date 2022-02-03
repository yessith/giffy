import { useEffect } from 'react';
import { GiphyListUi } from './GiphyListUi';
import { useGetGiphy } from 'hooks/useGetGiphy';
import { useGetLocation } from 'hooks/useGetLocation ';
import { useIntersectionObserver } from 'hooks/useIntersectionObserver';
import './GiphyList.css';

export function GiphyList({ onLoading, onError, query, children }) {
	const { HandleNextPage, externalRef } = GiphyListUi();
	const { loading, error } = useGetGiphy({ query });
	const { currentLocation } = useGetLocation();
	const path = currentLocation();

	const { isNearScreen } = useIntersectionObserver({
		externalRef: loading ? null : externalRef,
		once: false,
	});

	useEffect(() => {
		if (isNearScreen) HandleNextPage();
	}, [HandleNextPage, isNearScreen]);

	if (loading) return onLoading();
	if (error) return onError();
	console.log('GiphyList');

	return (
		<>
			<h1>
				{path === '/'
					? `Today's trending list`
					: `Results for ${decodeURI(path)} `}
			</h1>
			<section className='listGif'>{children()}</section>
			<div ref={externalRef}>ref</div>
		</>
	);
}

import React from 'react';

import { GiphyListUi } from './GiphyListUi';

import './GiphyList.css';

function GiphyList({ onLoading, onError, query, children }) {
	const { path, externalRef, loading, error } = GiphyListUi(query);

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

export default React.memo(GiphyList);

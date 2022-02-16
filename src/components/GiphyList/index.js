import React from 'react';

import { GiphyListUi } from './GiphyListUi';

import './GiphyList.css';

function GiphyList({ onLoading, onError, query, children }) {
	const { path, externalRef, loading, error } = GiphyListUi(query);
	const title = path === '/' ? `Today's trending list` : `Results for ${decodeURI(path)} `;

	if (loading) return onLoading();
	if (error) return onError();

	console.log('GiphyList');

	return (
		<section className='giffy-results'>
			<h1>{title}</h1>
			<div className='listOfGif'>{children()}</div>
			<div id='visoRef' ref={externalRef}></div>
		</section>
	);
}

export default React.memo(GiphyList);

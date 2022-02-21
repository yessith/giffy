import React from 'react';

import { GiffyListUi } from './GiffyListUi';

import './GiffyList.css';

function GiffyList({ onLoading, onError, query, children }) {
	const { path, externalRef, loading, error } = GiffyListUi(query);
	const title = path === '/' ? `Today's trending list` : `Results for ${decodeURI(path)} `;

	if (loading) return onLoading();
	if (error) return onError();

	console.log('GiffyList');

	return (
		<section className='giffy-results'>
			<h1>{title}</h1>
			<div className='listOfGif'>{children()}</div>
			<div id='visoRef' ref={externalRef}></div>
		</section>
	);
}

export default React.memo(GiffyList);

import React from 'react';

import { useContext } from 'react';
import { Link } from 'wouter';
import { GiphyContext } from 'context/GiphyContext';
// import { useIntersectionObserver } from 'hooks/useIntersectionObserver';
// import { useLazyImages } from 'hooks/useLazyImages';

import './GiffyItem.css';

function GiffyItem() {
	const { gifs } = useContext(GiphyContext);
	// const { fromRef } = useLazyImages();
	console.log('GiffyItem');

	return (
		<>
			{gifs.map(({ id, images, title }) => {
				const { url } = images.downsized_medium;
				return (
					<article className='gifItem' key={id}>
						<Link to={`/gif/${id}`}>
							<h3>{title}</h3>
							<figure className='gifImage'>
								<img src={url} alt={title} data-src={url} loading='lazy' />
							</figure>
						</Link>
					</article>
				);
			})}
		</>
	);
}

export default React.memo(GiffyItem);

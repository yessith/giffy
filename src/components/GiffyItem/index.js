import React from 'react';

import { useContext } from 'react';
import { Link } from 'wouter';
import { GiphyContext } from 'context/GiphyContext';
import { LazyImage } from 'components/LazyImage';

import './GiffyItem.css';

function GiffyItem() {
	const { gifs } = useContext(GiphyContext);

	console.log('GiffyItem');

	return (
		<>
			{gifs.map(({ id, images, title }, index) => {
				const { url } = images.downsized_medium;
				return (
					<article className='gifItem' key={id}>
						<Link to={`/gif/${id}`}>
							<h3>{title}</h3>
							<figure className='gifImage'>
								<LazyImage src={url} alt={title} />
							</figure>
						</Link>
					</article>
				);
			})}
		</>
	);
}

export default React.memo(GiffyItem);

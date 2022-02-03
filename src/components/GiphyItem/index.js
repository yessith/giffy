import { useContext } from 'react';
import { Link } from 'wouter';
import { GiphyContext } from 'context/GiphyContext';
// import { useIntersectionObserver } from 'hooks/useIntersectionObserver';
// import { useLazyImages } from 'hooks/useLazyImages';

import './GiphyItem.css';

export function GiphyItem() {
	const { gifs } = useContext(GiphyContext);
	// const { fromRef } = useLazyImages();
	console.log('GiphyItem');

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

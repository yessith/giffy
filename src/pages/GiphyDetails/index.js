import { useContext } from 'react';
import { GiphyContext } from '../../context/GiphyContext';

export function GiphyDetails({ params }) {
	const { findGif } = useContext(GiphyContext);
	const giphyId = params.id;
	const { id, imageUrl, title } = findGif(giphyId);

	return (
		<article className='gifItem' key={id}>
			<h3>{title}</h3>
			<img src={imageUrl} alt={title} />
		</article>
	);
}

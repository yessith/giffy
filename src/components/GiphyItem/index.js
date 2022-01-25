import { useContext } from 'react';
import { GiphyContext } from '../../context/GiphyContext';
import { Link } from 'wouter';
import { useGetGiphy } from '../../hooks/useGetGiphy';
import './GiphyItem.css';

export function GiphyItem({ query, onLoading }) {
	const { gifs } = useContext(GiphyContext);
	const { loading } = useGetGiphy(query);
	console.log('GiphyItem');

	return (
		<>
			{loading
				? onLoading()
				: gifs.map(({ id, images, title }) => {
						const imageUrl = images.downsized_medium.url;
						return (
							<article className='gifItem' key={id}>
								<Link to={`/gif/${id}`}>
									<h3>{title}</h3>
									<img src={imageUrl} alt={title} />
								</Link>
							</article>
						);
				  })}
		</>
	);
}

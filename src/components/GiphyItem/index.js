import { Link } from 'wouter';
import { useGiphyItem } from '../../hooks/useGiphyItem';
import './GiphyItem.css';

export function GiphyItem({ query, onLoading }) {
	const { gifs, loading } = useGiphyItem(query);

	if (loading) return onLoading();

	return (
		<>
			{gifs.map(({ id, images, title }) => {
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

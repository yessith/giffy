import { Link } from 'wouter';
import { useGetGiphy } from 'hooks/useGetGiphy';
import './GiphyItem.css';

export function GiphyItem({ query, onLoading, onError }) {
	const { gifs, loading, error } = useGetGiphy({ query });
	console.log('GiphyItem');

	if (loading) return onLoading();
	if (error) return onError();

	return (
		<>
			{gifs.map(({ id, images, title }) => {
				const { url } = images.downsized_medium;
				return (
					<article className='gifItem' key={id}>
						<Link to={`/gif/${id}`}>
							<h3>{title}</h3>
							<img src={url} alt={title} />
						</Link>
					</article>
				);
			})}
		</>
	);
}

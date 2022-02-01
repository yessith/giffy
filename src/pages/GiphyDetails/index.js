import { GiphyDetailsUi } from './GiphyDetailsUi';
import { Loading } from 'components/Loading';
import { Error } from 'components/Error';

export function GiphyDetails({ params }) {
	const gifId = params.id;
	const { gif, loading, error } = GiphyDetailsUi(gifId);
	const { images, title } = gif;
	const { url } = images.downsized_medium;

	if (loading) return <Loading />;
	if (error) return <Error />;

	return (
		<article className='gifItem'>
			<h3>{title}</h3>
			<img src={url} alt={title} />
		</article>
	);
}

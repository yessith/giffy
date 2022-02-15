import { Loading } from 'components/Loading';
import { Error } from 'components/Error';
import { useGetSingleGiphy } from 'hooks/useGetSingleGiphy';

export function GiphyDetails({ params }) {
	const { gif, loading, error } = useGetSingleGiphy({ gifId: params.id });
	const { title, url } = gif;

	if (loading) return <Loading />;
	if (error) return <Error />;

	return (
		<article className='gifItem'>
			<h3>{title}</h3>
			<img src={url} alt={title} loading='lazy' />
		</article>
	);
}

import { GiphyList } from 'components/GiphyList';
import { GiphyItem } from 'components/GiphyItem';
import { Loading } from 'components/Loading';
import { Error } from 'components/Error';

export function GiphyResults({ query }) {
	return (
		<>
			<GiphyList>
				{() => (
					<GiphyItem
						query={query}
						onLoading={() => <Loading />}
						onError={() => <Error />}
					/>
				)}
			</GiphyList>
		</>
	);
}

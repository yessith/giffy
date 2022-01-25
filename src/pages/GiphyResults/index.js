import { GiphyList } from '../../components/GiphyList';
import { GiphyItem } from '../../components/GiphyItem';
import { Loading } from '../../components/Loading';

export function GiphyResults({ query }) {
	return (
		<>
			<GiphyList>
				{() => <GiphyItem onLoading={() => <Loading />} query={query} />}
			</GiphyList>
		</>
	);
}

import { GiphyList } from '../../components/GiphyList';
import { GiphyItem } from '../../components/GiphyItem';
import { Loading } from '../../components/Loading';

export function Home() {
	return (
		<>
			<GiphyList>{() => <GiphyItem onLoading={() => <Loading />} />}</GiphyList>
		</>
	);
}

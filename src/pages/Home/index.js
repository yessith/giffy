import GiphyList from 'components/GiphyList';
import GiphyItem from 'components/GiphyItem';
import { Loading } from 'components/Loading';
import { Error } from 'components/Error';
// import './Home.css';

export function Home() {
	return (
		<main className='app-content'>
			<GiphyList onLoading={() => <Loading />} onError={() => <Error />}>
				{() => <GiphyItem />}
			</GiphyList>
		</main>
	);
}

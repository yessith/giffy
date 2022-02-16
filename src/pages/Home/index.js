import GiphyList from 'components/GiphyList';
import GiphyItem from 'components/GiphyItem';
import { Loading } from 'components/Loading';
import { Error } from 'components/Error';
import { Helmet } from 'react-helmet';
// import './Home.css';

export function Home() {
	return (
		<>
			<Helmet>
				<title>Home | Giffy</title>
				<meta name='description' content='Web site created using create-react-app' />
			</Helmet>
			<main className='app-content'>
				<GiphyList onLoading={() => <Loading />} onError={() => <Error />}>
					{() => <GiphyItem />}
				</GiphyList>
			</main>
		</>
	);
}

import { Helmet } from 'react-helmet';
import { Loading } from 'components/Loading';
import { Error } from 'components/Error';
import GiphyList from 'components/GiphyList';
import GiphyItem from 'components/GiphyItem';
import { GiffyAside } from 'components/GiffyAside';
import { GiffyTrendingTags } from 'components/GiffyTrendingTags';
import './Home.css';

export function Home() {
	return (
		<>
			<Helmet>
				<title>Home | Giffy</title>
				<meta name='description' content='Web site created using create-react-app' />
			</Helmet>
			<main className='giffy-content content-flex'>
				<GiffyAside>
					<GiffyTrendingTags />
				</GiffyAside>
				<GiphyList onLoading={() => <Loading />} onError={() => <Error />}>
					{() => <GiphyItem />}
				</GiphyList>
			</main>
		</>
	);
}

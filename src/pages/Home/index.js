import { Helmet } from 'react-helmet';
import { Skeleton } from 'components/Skeleton';
import { Error } from 'components/Error';
import GiffyList from 'components/GiffyList';
import GiffyItem from 'components/GiffyItem';
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
				<GiffyList onLoading={() => <Skeleton />} onError={() => <Error />}>
					{() => <GiffyItem />}
				</GiffyList>
			</main>
		</>
	);
}

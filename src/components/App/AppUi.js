import { Route } from 'wouter';

// COMPONENTS
import { Skeleton } from 'components/Skeleton';
import { Error } from 'components/Error';
import { Header } from 'components/Header';
import { GiffySearch } from 'components/GiffySearch';
import { GiffyMenu } from 'components/GiffyMenu';
import GiffyList from 'components/GiffyList';
import GiffyItem from 'components/GiffyItem';

// PAGES
import { Home } from 'pages/Home';
import { GiphyResults } from 'pages/GiphyResults';
import { GiphyDetails } from 'pages/GiphyDetails';

import './App.css';

export function AppUi() {
	return (
		<>
			<Header>
				<GiffyMenu />
				<GiffySearch />
			</Header>

			<Route component={Home} path='/' />

			<Route path='/search/:query'>
				{({ query }) => (
					<GiphyResults>
						<GiffyList onLoading={() => <Skeleton />} onError={() => <Error />} query={query}>
							{() => <GiffyItem />}
						</GiffyList>
					</GiphyResults>
				)}
			</Route>

			<Route component={GiphyDetails} path='/gif/:id' />
		</>
	);
}

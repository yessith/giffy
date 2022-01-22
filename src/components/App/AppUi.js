import { Route } from 'wouter';

// COMPONENTS
import { Loading } from '../Loading';
import { Header } from '../Header';
import { GiphySearch } from '../GiphySearch';
import { GiphyMenu } from '../GiphyMenu';
import { GiphyList } from '../GiphyList';
import { GiphyItem } from '../GiphyItem';

// PAGES
import { Home } from '../../pages/Home';
import { GiphyDetails } from '../../pages/GiphyDetails';

import './App.css';

export function AppUi() {
	return (
		<>
			<Header>
				<GiphyMenu />
				<GiphySearch />
			</Header>

			<Route component={Home} path='/' />

			<Route path='/search/:query'>
				{({ query }) => (
					<GiphyList>
						{() => <GiphyItem onLoading={() => <Loading />} query={query} />}
					</GiphyList>
				)}
			</Route>

			<Route component={GiphyDetails} path='/gif/:id' />
		</>
	);
}

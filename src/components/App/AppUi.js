import { Route } from 'wouter';

// COMPONENTS
import { Header } from '../Header';
import { GiphySearch } from '../GiphySearch';
import { GiphyMenu } from '../GiphyMenu';

// PAGES
import { Home } from '../../pages/Home';
import { GiphyResults } from '../../pages/GiphyResults';
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
				{({ query }) => <GiphyResults query={query} />}
			</Route>

			<Route component={GiphyDetails} path='/gif/:id' />
		</>
	);
}

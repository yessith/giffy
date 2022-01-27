import { Route } from 'wouter';

// COMPONENTS
import { Header } from 'components/Header';
import { GiphySearch } from 'components/GiphySearch';
import { GiphyMenu } from 'components/GiphyMenu';
import { Footer } from 'components/Footer';
// import { Category } from 'components/Category';
import { LazyTrending } from 'components/LazyTrending';

// PAGES
import { Home } from 'pages/Home';
import { GiphyResults } from 'pages/GiphyResults';
import { GiphyDetails } from 'pages/GiphyDetails';

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

			<Footer>
				<LazyTrending />
				{/* <LazyTrending onShowComponent={() => <Category />} /> */}
			</Footer>
		</>
	);
}

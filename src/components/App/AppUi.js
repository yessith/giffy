import { Route } from 'wouter';
import { Loading } from '../Loading';
import { Header } from '../Header';
import { GiphySearch } from '../GiphySearch';
import { GiphyMenu } from '../GiphyMenu';
import { GiphyList } from '../GiphyList';
import { GiphyItem } from '../GiphyItem';
import { GiphyDetails } from '../GiphyDetails';

import './App.css';

export function AppUi() {
	const query = 'reaction ';

	return (
		<>
			<Header>
				<GiphyMenu />
				<GiphySearch />
			</Header>

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

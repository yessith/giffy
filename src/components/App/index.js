import { AppUi } from './AppUi';
import { GiphyProvider } from '../../context/GiphyContext';

export function App() {
	return (
		<GiphyProvider>
			<AppUi />
		</GiphyProvider>
	);
}

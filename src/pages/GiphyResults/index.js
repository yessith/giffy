import { GiphyContext } from 'context/GiphyContext';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';

import './GiphyResults.css';

export function GiphyResults({ children }) {
	const { path } = useContext(GiphyContext);
	const title = decodeURI(path);

	return (
		<>
			<Helmet>
				<title>{title} | Giffy</title>
				<meta name='description' content={`Search results for ${title}`} />
			</Helmet>
			<main className='giffy-content'>{children}</main>
		</>
	);
}

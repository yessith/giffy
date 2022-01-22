import { Link } from 'wouter';

export function GiphyMenu() {
	return (
		<>
			<Link to='/'>
				<h1>Giffy</h1>
			</Link>
			<Link to='/search/matrix'>Gifs De Matrix</Link>
		</>
	);
}

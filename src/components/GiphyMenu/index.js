import { Link } from 'wouter';

export function GiphyMenu() {
	return (
		<nav>
			<Link to='/'>
				<h1>Giffy</h1>
			</Link>
			<Link to='/search/matrix'>Gifs De Matrix</Link>
		</nav>
	);
}

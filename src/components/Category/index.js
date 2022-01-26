import { Link } from 'wouter';
import { useGetTrending } from 'hooks/useGetTrending';
import './Category.css';

export function Category() {
	const { trending } = useGetTrending();

	return (
		<ul className='trending-list'>
			{trending.map((item) => (
				<li className='trending-item' key={item}>
					<Link to={`/search/${item}`}>{item}</Link>
				</li>
			))}
		</ul>
	);
}

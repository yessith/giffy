import { Link } from 'wouter';
import { useGetTrendingTerms } from 'hooks/useGetTrendingTerms';
import './Category.css';

function Category() {
	const { trends } = useGetTrendingTerms();

	return (
		<ul className='trending-list'>
			{trends.map((item) => (
				<li className='trending-item' key={item}>
					<Link to={`/search/${item}`}>{item}</Link>
				</li>
			))}
		</ul>
	);
}
export { Category as default };

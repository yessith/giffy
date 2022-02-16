import { Link } from 'wouter';
import { useGetTrendingTags } from 'hooks/useGetTrendingTags';
import './GiffyTags.css';

function GiffyTags() {
	const { trends } = useGetTrendingTags();

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
export { GiffyTags as default };

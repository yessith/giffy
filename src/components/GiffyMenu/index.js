import { Link } from 'wouter';
import './GiffyMenu.css';

export function GiffyMenu() {
	return (
		<nav className='app-menu'>
			<Link to='/'>
				<img className='app-logo' src='/logo.png' alt='Logo Giphy' />
			</Link>
			<ul className='app-login'>
				<li className='app-login-item'>Login</li>
				<li className='app-login-item'>register</li>
			</ul>
		</nav>
	);
}

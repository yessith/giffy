import { useLocation } from 'wouter';

export function useGetLocation() {
	const [location] = useLocation();

	const currentLocation = () =>
		location === '/'
			? '/'
			: location.slice(1).toLocaleLowerCase().split('/')[1];

	return { currentLocation };
}

import { useEffect, useState, useRef } from 'react';

export function useNearScreen({ distance = '100px' } = {}) {
	const [isNearScreen, setIsNearScreen] = useState(false);
	const fromRef = useRef();

	useEffect(() => {
		const onIntersection = (entry, observer) => {
			const element = entry[0];
			if (element.isIntersecting) {
				setIsNearScreen(true);
				// observer.disconnect();
				observer.unobserve(element.target);
			}
		};

		const observer = new IntersectionObserver(onIntersection, {
			rootMargin: distance,
		});

		observer.observe(fromRef.current);

		return () => observer.disconnect();
	}, [distance]);

	return { isNearScreen, fromRef };
}

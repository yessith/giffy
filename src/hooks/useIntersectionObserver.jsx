import { useEffect, useState, useRef } from 'react';

export function useIntersectionObserver({ externalRef, once = true } = {}) {
	const [isNearScreen, setIsNearScreen] = useState(false);
	const fromRef = useRef(null);

	useEffect(() => {
		const element = externalRef ? externalRef.current : fromRef.current;

		function onIntersection(entries, observer) {
			entries.forEach((entry) => {
				const isIntersecting = entry.isIntersecting;

				if (isIntersecting) {
					setIsNearScreen(true);
					once && observer.disconnect();
				} else {
					!once && setIsNearScreen(false);
				}
				// console.log(`intersecting ${isIntersecting} `);
				// console.log(entry.target);
			});
		}

		const observer = new IntersectionObserver(onIntersection);

		if (element) {
			observer.observe(element);
		}

		return () => observer.disconnect();
	}, [externalRef, once]);

	return { isNearScreen, fromRef };
}

/**
 		const onIntersection = (entry, observer) => {
			const element = entry[0];
			const target = entry[0].target.nodeName;
			if (element.isIntersecting) {
				setIsNearScreen(true);
				if (target === 'SECTION') {
					observer.unobserve(element.target);
				} else {
					setIsNearScreen(false);
				}
				console.log(element.isIntersecting, target);
			}
			// observer.disconnect();
		};
 */

/**
  const element = entry.target;
   const imageSrc = element.getAttribute('data-src')
   element.removeAttribute('data-src');
   element.setAttribute('src', imageSrc);
     */

import { useEffect, useRef } from 'react';

export function useLazyImages() {
	const fromRef = useRef();

	useEffect(() => {
		const { current } = fromRef;

		const showImage = (entry) => {
			const image = entry.target;
			const imageSrc = image.getAttribute('data-src');
			image.removeAttribute('data-src');
			image.setAttribute('src', imageSrc);

			observer.disconnect();
		};

		const isIntersecting = (entry) => entry.isIntersecting;

		const observer = new IntersectionObserver((entries) => {
			entries.filter(isIntersecting).forEach(showImage);
		});

		if (current) observer.observe(current);

		return () => observer.disconnect();
	}, []);

	return { fromRef };
}

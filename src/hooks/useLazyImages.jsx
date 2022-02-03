import { useRef, useEffect } from 'react';

export function useLazyImages() {
	const fromRef = useRef();

	useEffect(() => {
		const { current } = fromRef;

		const showImage = (entry) => {
			const container = entry.target;
			const image = container.firstChild;
			const url = image.dataset.src;
			image.src = url;
			observer.unobserve(container);
			console.log(entry);
			console.log(container);
		};

		const isIntersecting = (intersectionEntry) =>
			intersectionEntry.isIntersecting;

		const observer = new IntersectionObserver((entries) => {
			entries.filter(isIntersecting).forEach(showImage);
		});

		if (current) observer.observe(current);

		return () => observer.disconnect();
	}, []);

	return { fromRef };
}

import { useEffect, useState } from 'react';

export function LazyTrending({ onShowComponent }) {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const onIntersection = (entries) => {
			const element = entries[0];
			if (element.isIntersecting) setShow(true);
			console.log(element);
		};

		const observer = new IntersectionObserver(onIntersection, {
			rootMargin: '100px',
		});

		observer.observe(document.getElementById('lazyTrending'));
	}, []);

	return <div id='lazyTrending'>{show ? onShowComponent() : null}</div>;
}

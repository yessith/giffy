import { lazy, Suspense } from 'react';
import { useIntersectionObserver } from 'hooks/useIntersectionObserver';
// import { Category } from 'components/Category';

export function LazyTrending() {
	const { isNearScreen, fromRef } = useIntersectionObserver();
	const Category = lazy(() => import('components/Category'));

	return (
		<section className='trending-tags' ref={fromRef}>
			<h2>Current Trending Tags</h2>
			<Suspense fallback={<p>cargando...</p>}>
				{isNearScreen ? <Category /> : null}
			</Suspense>
		</section>
	);
}

// return <div ref={fromRef}>{isNearScreen ? onShowComponent() : null}</div>;

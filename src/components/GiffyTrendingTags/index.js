import { lazy, Suspense } from 'react';
import { useIntersectionObserver } from 'hooks/useIntersectionObserver';
import Spinner from 'components/Spinner';
// import { Category } from 'components/Category';

export function GiffyTrendingTags() {
	const { isNearScreen, fromRef } = useIntersectionObserver();
	const GiffyTags = lazy(() => import('components/GiffyTags'));

	return (
		<section className='trending-tags' ref={fromRef}>
			<h2>Current Trending Tags</h2>
			<Suspense fallback={<Spinner />}>{isNearScreen ? <GiffyTags /> : null}</Suspense>
		</section>
	);
}

// return <div ref={fromRef}>{isNearScreen ? onShowComponent() : null}</div>;

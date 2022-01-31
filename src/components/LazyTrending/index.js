import { lazy, Suspense } from 'react';
import { useNearScreen } from 'hooks/useNearScreen';
// import { Category } from 'components/Category';

export function LazyTrending() {
	const { isNearScreen, fromRef } = useNearScreen();
	const Category = lazy(() => import('components/Category'));

	return (
		<Suspense fallback={<p>cargando...</p>}>
			<div ref={fromRef}>{isNearScreen ? <Category /> : null}</div>
		</Suspense>
	);
}

// return <div ref={fromRef}>{isNearScreen ? onShowComponent() : null}</div>;

import { useLazyImages } from 'hooks/useLazyImages';
export function LazyImage({ src, alt }) {
	const { fromRef } = useLazyImages();
	return <img ref={fromRef} data-src={src} loading='lazy' alt={alt} />;
}

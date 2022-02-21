export const createObserver = (callback, newOptions = {}) => {
	const defaultOptions = {
		root: null,
		rootMargin: '0px',
		threshold: 0.15,
	};
	return new IntersectionObserver(callback, Object.assign(defaultOptions, newOptions));
};

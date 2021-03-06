import { useContext, useCallback, useRef, useEffect } from 'react';
// import debounce from 'just-debounce-it';
import throttle from 'just-throttle';
import { GiphyContext } from 'context/GiphyContext';

// HOOKS
import { useGetGiphy } from 'hooks/useGetGiphy';
import { useIntersectionObserver } from 'hooks/useIntersectionObserver';

export function GiffyListUi(query) {
	const { setPage, path } = useContext(GiphyContext);
	const { loading, error } = useGetGiphy({ query });
	const externalRef = useRef();

	const { isNearScreen } = useIntersectionObserver({
		externalRef: loading ? null : externalRef,
		once: false,
	});

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const HandleNextPage = useCallback(
		// debounce(() => setPage((prevPage) => prevPage + 1), 500),
		throttle(() => setPage((prevPage) => prevPage + 1), 1000, {
			leading: true,
		}),
		[setPage]
	);

	useEffect(() => {
		if (isNearScreen) HandleNextPage();
	}, [HandleNextPage, isNearScreen]);

	return { path, externalRef, loading, error };
}

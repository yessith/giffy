import { useContext, useCallback, useRef } from 'react';
import debounce from 'just-debounce-it';
import throttle from 'just-throttle';
import { GiphyContext } from 'context/GiphyContext';

export function GiphyListUi() {
	const { setPage } = useContext(GiphyContext);
	const externalRef = useRef();

	const HandleNextPage = useCallback(
		// debounce(() => setPage((prevPage) => prevPage + 1), 500),
		throttle(() => setPage((prevPage) => prevPage + 1), 1000, {
			leading: true,
		}),
		[setPage]
	);

	return { HandleNextPage, externalRef };
}

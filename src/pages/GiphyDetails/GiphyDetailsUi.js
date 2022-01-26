import { useEffect, useContext, useState } from 'react';
import { GiphyContext } from 'context/GiphyContext';

export function GiphyDetailsUi(gifId) {
	const { gifs, setLoading, setError } = useContext(GiphyContext);

	const singleGif = gifs.find(({ id }) => id === gifId);
	const [gif, setGif] = useState(singleGif);

	useEffect(() => {
		setLoading(true);
		try {
			if (singleGif) {
				const stringDataGif = JSON.stringify(singleGif);
				localStorage.setItem('lastGifId', stringDataGif);
				setLoading(false);
			} else {
				const getLocalStorage = localStorage.getItem('lastGifId');
				const parseData = JSON.parse(getLocalStorage);
				setGif(parseData);
				setLoading(false);
			}
		} catch (error) {
			setError(error);
		}
	}, [gifId]);

	return { gif };
}

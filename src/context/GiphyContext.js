import React from 'react';
import { useInitialState } from 'hooks/useInitialState';

const GiphyContext = React.createContext();

const GiphyProvider = ({ children }) => {
	const initialState = useInitialState();

	return (
		<GiphyContext.Provider value={initialState}>
			{children}
		</GiphyContext.Provider>
	);
};

export { GiphyContext, GiphyProvider };

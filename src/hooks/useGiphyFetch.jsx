import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';

export const useGetGiphy = (url) => {
	const [results, setResults] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!url) return;
		const getData = async () => {
			setLoading(true);
			setError(null);
			try {
				const data = await fetchData(url);
				setResults([data]);
				setLoading(false);
			} catch (error) {
				console.log('Ooops, error', error.message);
				setError(error.message);
			}
		};

		getData();
	}, [url]);

	return { results, loading, error };
};

// el inicio del componente o la preparacion inidial
// lo que necesita el componente para funcionar
// lo que va a renderizar el componente

/*
 * El context de react es un objeto glabal
 * que almacena el estado y lo comparte con todos
 * los componentes existentes dentro de la misma
 * dandoles acceso al estado mismo de la app
 *
 * Inicialmente se importa react y se crea una
 * variable como punto de partida del contexto
 *
 * import React from 'react';
 * export const GiphyContext = React.createContext(); => proveedor
 *
 * proveedor:
 * objeto con los elementos a preveer para ser consumidos
 * por el consumer
 *
 * consumidor:
 * para tener acceso a los elementos que se encuentran
 * dentro del proveedor, se utiliza el hook useContex
 * que recibe como parametro el rpveedor para poder
 * consumir sus elementos
 *

*/

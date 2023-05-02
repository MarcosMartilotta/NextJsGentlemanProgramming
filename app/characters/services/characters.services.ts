//Aca vamos a tener dos metodos, un get characters y la declaracion del la interface

import { Character } from "../models"; //Esta manera de importar me la provee barrels

//El dia de mañana quiero pasar un id entre los parentesis como id: tringy puedo agregarlo a la URL como es ts hay que decir el tipo
//
export const getCharacters = (): Promise<Character[]> => {
  const url = `https://rickandmortyapi.com/api/character`;
  return fetch(url)
	.then((response) => response.json())
	.then((data) => data.results)
  }


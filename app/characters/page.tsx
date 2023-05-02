import React from "react";
import { getCharacters } from "./services";
import { Card } from "../../components";

//uso getCharacters para hacer el fetch de los characters

async function fetchCharacters() {
  return await getCharacters();
}

//tengo que poner que el componente es async porque dentro hace una operacion asíncrona
async function Characters() {
  const characters = await fetchCharacters(); //No lo llamo data, lo llamo characters para hacer cleanCode
  return (
    <div>
      {/* Las iteraciones en los objetos no se hacen siempre en el mismo orden */}
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </div>
  );
}

export default Characters;

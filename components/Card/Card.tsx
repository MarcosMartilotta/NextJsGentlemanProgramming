import { Character } from "../../app/characters/models";

//Cuando la interfaz será unica del componente y es simple conviene hacerla directamente
//en el archivo del componente y no en una carpeta models como hicimos para los characters

interface Props {
  data: Character;
}

function Card({ data }: Props) {
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Type: {data.type}</p>
      <p>Created: {data.created}</p>
    </div>
  );
}

export default Card;

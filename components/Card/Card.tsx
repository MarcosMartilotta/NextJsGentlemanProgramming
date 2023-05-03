import Image from "next/image";
import "./Card.css";

//Cuando la interfaz será unica del componente y es simple conviene hacerla directamente
//en el archivo del componente y no en una carpeta models como hicimos para los characters
//Segun next.js debemos tener modulos de css o scss, no usar styled components por ejemplo. Siempre que usemos ssg issg y tipos de renderizado del servidor

//type CardData = Partial<Character & Location>;
//Esto lo que dice es que va a aceptar la unificacion de los dos y va a transformar a todas las propiedades en opcionales
//El problema es que es todo opcional

export interface CardData {
  name: string;
  type?: string;
  created: string;
  image?: string;
}

interface Props {
  data: CardData;
}

function Card({ data }: Props) {
  let formattedType = data.type;
  formattedType ||= "No type"; //esta es una nueva forma de hacer renderizado condicional. Si viene vacio pone No type
  return (
    <div className="Card">
      <p>Name: {data.name}</p>
      <p>Type: {formattedType}</p>
      {/* si no tengo data type pongo que no tiene */}
      <p>Created: {data.created}</p>
      {!!data.image && (
        <Image width="100" height="100" alt="Image" src={data.image} />
      )}
    </div>
  );
}

export default Card;

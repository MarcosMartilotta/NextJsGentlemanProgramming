import { notFound } from "next/navigation";

export default function NotFoundComponent() {
  notFound(); //esto sirve si por ejemplo nuestro fetch no encontro lo que pidio ponemos que no existe por ejemplo.
  //El problema es que esto es bloqueante
  return <div>Esto ni lo vas a ver</div>;
}

"use client"; //le digo que es client side rendering porque necesito usar use effect
import { useEffect } from "react";

function Error({ error, reset }: { error: Error; reset: () => void }) {
  //Podemos mostrar que paso algo y un boton de error para resetear y que vuelva a chequear que el componente funciona
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Resset button boundary</button>
    </div>
  );
}

export default Error;

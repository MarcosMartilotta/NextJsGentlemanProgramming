import { Routes } from "../models";
import { Navigator } from "../components";
import Image from "next/image";
import navidad from "../public/images/—Pngtree—realistic holly with random ribbon_5670753.png";
import Script from "next/script";
import { Suspense, lazy } from "react";

const card = lazy(() => import("../components/Card/Card"));
/* Otra manera es usar next dynamics pero esto sirve mas que nada para dar soporte a pages. Next recomienda
usar lazy y suspense */
function App() {
  return (
    <Suspense fallback={<div>Cargando</div>}>
      {/* <Script strategy="beforeInteractive" src="https://example.com/script.js" /> */}
      {/* Tenemos varisd strategys entre ellas antes de que sea interactuable, despues de que sea interactuable, una muy interesante
      es la de lazy que es cuando ya haya hecho todos los llamados a las apis etc y el navegador este sin hacer nada, recien ahi que lo cargue */}
      {/*    <Script>
        {`document.getElementById.("root").style.height = "100vh"`}
      </Script> */}
      {/* Esto de todas maneras no es del todo correcto, posriamos usar dangerousLySetInnerHTML para que sea un poco mas seguro
      xss es una libreria que nos permitiría hacer eso de manera segura. Se llama sanitizar, y se usa para que no nos puedan inyectar html o codigo malicioso */}
      <div style={{ position: "relative" }}>
        <h1>Welcome to rick and morty app</h1>
        <h2>What do you want to see</h2>
        <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
        {/* <Link href={Routes.CHARACTERS}>Characters</Link> */}
        {/* De esta manera si en un futuro tengo que cambiar la URL es mas sencillo */}
        {/* No estan buenas las URL hardcodeadas */}
        <Image
          alt="img"
          src={navidad} /* blurDataURL="" placeHolder="blur" para que lo use */
          priority
        />
        {/* Con fill hacemos que la imagen use todo el contenido si o si necesitamos que el contenedor tenga position relative
        . en este caso nextjs maneja el cls automaticamente porque es contenido estatico, si es dinamico 
        como imagenes traidas desde una api hay que poer width y height a mano */}
        {/* El blurDataURL nos va a servir para colocar una imagen blureada mientras carga la nuestra
        hay que pasar la imagen que queremos a base 64 con la pagina que se paso en el curso
         si usamos placeholder blur va joya sin el blurDataURL pero cuando son imagenes dinamicas si o si hay que usarlo*/}
      </div>
    </Suspense>
  );
}

export default App;

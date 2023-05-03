import { Routes } from "../models";
import { Navigator } from "../components";

function App() {
  return (
    <div>
      <h1>Welcome to rick and morty app</h1>
      <h2>What do you want to see</h2>
      <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
      {/* <Link href={Routes.CHARACTERS}>Characters</Link> */}
      {/* De esta manera si en un futuro tengo que cambiar la URL es mas sencillo */}
      {/* No estan buenas las URL hardcodeadas */}
    </div>
  );
}

export default App;

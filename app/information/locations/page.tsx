import { Card, Navigator } from "../../../components";
import { getLocations } from "./services";
import { Routes } from "../../../models";

//uso getlocations para hacer el fetch de los locations

async function fetchLocations() {
  return await getLocations();
}

//tengo que poner que el componente es async porque dentro hace una operacion asíncrona
async function Locations() {
  const locations = await fetchLocations(); //No lo llamo data, lo llamo locations para hacer cleanCode
  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.CHARACTERS]} />
      {/* Las iteraciones en los objetos no se hacen siempre en el mismo orden */}
      {locations.map((location) => (
        <Card key={location.id} data={location} />
      ))}
    </>
  );
}

export default Locations;

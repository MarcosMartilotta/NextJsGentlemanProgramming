/* export enum Routes {
    HOME = "/",
    CHARACTERS = "information/characters",
    LOCATION = "information/location",
}
 */
/* esto se puede hacer exportando una constante pero en TS esta mejor enum porque los puedo usar como un tipo */
/* Los enum sirven para declarar varios tipos de variables al mismo tiempo, y a su vez se puede acceder a cada uno de ellos como si fuera un objeto */

export const Routes = {
    HOME: {
        path:"/",
        name: "Home",
    },
    CHARACTERS: {
        path:"information/characters",
        name: "Characters",
    },
    LOCATIONS: {
        path:"information/locations",
        name: "Locations",
    },
}

export interface Route {
    path: string;
    name: string;
}
import CrearActor from "./actores/CrearActor";
import EditarActor from "./actores/EditarActor";
import IndiceActores from "./actores/IndicesActores";
import CrearCine from "./cines/CrearCine";
import EditarCine from "./cines/EditarCine";
import IndiceCines from "./cines/IndiceCines";
import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import IndiceGeneros from "./generos/IndicesGeneros";
import LandingPage from "./LandingPage";
import CrearPelicula from "./peliculas/CrearPelicula";
import EditarPelicula from "./peliculas/EditarPelicula";
import FiltrarPelicula from "./peliculas/FiltrarPelicula";
import RedireccionarALanding from "./utils/RedireccionarALanding";

const rutas = [
    {path: '/', componente: LandingPage, exact: true},

    {path: '/generos', componente: IndiceGeneros, exact: true},
    {path: '/generos/crear', componente: CrearGenero},
    {path: '/generos/editar/:id(\\d+)', componente: EditarGenero},

    {path: '/actores', componente: IndiceActores, exact: true},
    {path: '/actores/crear', componente: CrearActor},
    {path: '/actores/editar/:id(\\d+)', componente: EditarActor},

    {path: '/cines', componente: IndiceCines, exact: true},
    {path: '/cines/crear', componente: CrearCine},
    {path: '/cines/editar/:id(\\d+)', componente: EditarCine},

    {path: '/peliculas/filtrar', componente: FiltrarPelicula},
    {path: '/peliculas/crear', componente: CrearPelicula},
    {path: '/peliculas/editar/:id(\\d+)', componente: EditarPelicula},

    // Para cualquier ruta, es decir, aqui entran las rutas no encontradas
    // Debe ir al final
    {path: '*', componente: RedireccionarALanding},
];

export default rutas;

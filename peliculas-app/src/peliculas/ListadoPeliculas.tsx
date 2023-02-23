import { pelicula } from "./peliculas.model";
import css from "./ListadoPeliculas.module.css";
import PeliculaIndividual from "./PeliculaIndividual";
import Cargando from "../utils/Cargando";
import ListadoGenerico from "../utils/ListadoGenerico";

function ListadoPeliculas(props: ListadoPeliculasProps) {

    return (
        <ListadoGenerico listado={props.peliculas}>
        <div className={css.div}>
                {props.peliculas?.map(pelicula =>
                    <PeliculaIndividual key={pelicula.id} pelicula={pelicula} />
                )}
        </div>
    </ListadoGenerico>
    );
}

interface ListadoPeliculasProps {
    peliculas?: pelicula[];
}

export default ListadoPeliculas;

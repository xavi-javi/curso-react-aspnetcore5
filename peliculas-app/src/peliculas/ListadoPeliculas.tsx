import { pelicula } from "./peliculas.model";
import css from "./ListadoPeliculas.module.css";
import PeliculaIndividual from "./PeliculaIndividual";
import Cargando from "../utils/Cargando";

function ListadoPeliculas(props: ListadoPeliculasProps) {

    if (!props.peliculas) {
        return (
            <>
                <Cargando />
            </>
        );
    } else if (props.peliculas.length === 0) {
        return (
            <>
                No hay elementos para mostrar
            </>
        );
    } else {
        return (
            <div className={css.div}>
                {props.peliculas.map(pelicula =>
                    <PeliculaIndividual key={pelicula.id} pelicula={pelicula} />
                )}
            </div>
        );
    }
}

interface ListadoPeliculasProps {
    peliculas?: pelicula[];
}

export default ListadoPeliculas;

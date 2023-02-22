import { pelicula } from "./peliculas.model";
import css from "./ListadoPeliculas.module.css";
import PeliculaIndividual from "./PeliculaIndividual";

function ListadoPeliculas(props: ListadoPeliculasProps) {
    return (
        <div className={css.div}>
            {props.peliculas.map(pelicula =>
                <PeliculaIndividual key={pelicula.id} pelicula={pelicula} />
            )}
        </div>
    );
}

interface ListadoPeliculasProps {
    peliculas: pelicula[];
}

export default ListadoPeliculas;

import { pelicula } from "./peliculas.model";
import css from "./PeliculaIndividual.module.css"

function PeliculaIndividual(props: PeliculaIndividualProps) {

    const peliculaURL = `/pelicula/${props.pelicula.id}`;

    return (
        <div className={css.div}>
            <a href={peliculaURL}>
                <img src={props.pelicula.poster} alt="Poster" />
            </a>
            <p>
                <a href={peliculaURL}>{props.pelicula.titulo}</a>
            </p>
        </div>
    );
}

interface PeliculaIndividualProps {
    pelicula: pelicula
}

export default PeliculaIndividual;

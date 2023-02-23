import { useParams } from "react-router-dom";

function EditarGenero() {

    const {id} : any = useParams();

    return (
        <>
            <h3>Editar Género</h3>
            <p>El id del genero es {id}</p>
        </>
    );
}

export default EditarGenero;

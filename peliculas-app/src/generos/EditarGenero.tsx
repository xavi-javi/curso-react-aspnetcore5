import { useParams } from "react-router-dom";
import FormularioGeneros from "./FormularioGeneros";

function EditarGenero() {

    const {id} : any = useParams();

    return (
        <>
            <h3>Editar Género</h3>
            <p>El id del genero es {id}</p>
            <FormularioGeneros modelo={{nombre: 'Acción'}} onSubmit={async values => {
                await new Promise(r => setTimeout(r, 3000));
                console.log(values);
            }}  />
        </>
    );
}

export default EditarGenero;

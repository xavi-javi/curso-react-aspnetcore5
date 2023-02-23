import { useHistory } from "react-router-dom";
import Button from "../utils/Button";

function CrearGenero() {

    const history = useHistory();

    const handleGuardar = () => {
        history.push('/generos');
    };

    return (
        <>
            <h3>Crear Género</h3>
            <Button onClick={handleGuardar}>Guardar</Button>
        </>
    );
}

export default CrearGenero;

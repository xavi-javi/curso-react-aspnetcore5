import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, useHistory } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import FormularioGeneros from "./FormularioGeneros";

function CrearGenero() {

    // const history = useHistory();

    // const handleGuardar = () => {
    //     history.push('/generos');
    // };

    return (
        <>
            <h3>Crear Género</h3>
            <FormularioGeneros modelo={{nombre: ''}} onSubmit={async values => {
                await new Promise(r => setTimeout(r, 3000));
                console.log(values);
            }}  />
        </>
    );
}

export default CrearGenero;

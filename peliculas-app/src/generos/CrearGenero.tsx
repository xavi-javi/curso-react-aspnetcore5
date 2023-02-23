import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, useHistory } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";

function CrearGenero() {

    // const history = useHistory();

    // const handleGuardar = () => {
    //     history.push('/generos');
    // };

    return (
        <>
            <h3>Crear Género</h3>

            <Formik initialValues={{
                nombre: ''
            }} onSubmit={values => {
                console.log(values);
            }} validationSchema={Yup.object({ nombre: Yup.string().required('Este campo es requerido')})}
            >
                <Form>
                    <FormGroupText campo="nombre" label="Nombre:" />
                    <Button type="submit">Guardar</Button>
                    <Link to="/generos" className="btn btn-seconday ms-3">Cancelar</Link>
                </Form>
            </Formik>
        </>
    );
}

export default CrearGenero;

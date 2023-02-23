import { Formik, Field, Form } from "formik";
import { Link, useHistory } from "react-router-dom";
import Button from "../utils/Button";

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
            }}
            >
                <Form>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre:</label>
                        <Field name="nombre" className="form-control"></Field>
                    </div>
                    <Button type="submit">Guardar</Button>
                    <Link to="/generos" className="btn btn-seconday ms-3">Cancelar</Link>
                </Form>
            </Formik>
        </>
    );
}

export default CrearGenero;

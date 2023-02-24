import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { generoCreacionDTO } from "./generos.model";
import * as Yup from "yup";

function FormularioGeneros(props: FormularioGenerosProps) {
    return (
        <Formik 
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({ nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()})}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre:" />
                    <Button type="submit" disabled={formikProps.isSubmitting} >Guardar</Button>
                    <Link to="/generos" className="btn btn-seconday ms-3">Cancelar</Link>
                </Form>
            )}
        </Formik>
    );
}

interface FormularioGenerosProps {
    modelo: generoCreacionDTO,
    onSubmit(values: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void
}

export default FormularioGeneros;

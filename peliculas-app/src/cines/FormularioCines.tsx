import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { cineCreacionDTO } from "./cines.model";
import * as Yup from "yup";

function FormularioCines(props: FormularioCinesProps) {
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
                    <Link to="/cines" className="btn btn-seconday ms-3">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface FormularioCinesProps {
    modelo: cineCreacionDTO;
    onSubmit(valores: cineCreacionDTO, acciones: FormikHelpers<cineCreacionDTO>): void;
}

export default FormularioCines;

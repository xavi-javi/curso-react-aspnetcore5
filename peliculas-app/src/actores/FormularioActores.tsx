import { Form, Formik, FormikHelpers } from "formik";
import { actorCreacionDTO } from "./actores.model";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import FormGroupMarkdown from "../utils/FormGroupMarkdown";

function FormularioActores(props: FormularioActoresProps) {

    return (
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula(),
                fechaNacimiento : Yup.date().nullable().required('Este campo es requerido')
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre:" />
                    <FormGroupFecha label="Fecha de Nacimiento:" campo="fechaNacimiento" />
                    <FormGroupImagen label="Foto:" campo="foto" imagenURL={props.modelo.fotoURL} />
                    <FormGroupMarkdown campo="biografia" label="Biografía:" />
                    <Button type="submit" disabled={formikProps.isSubmitting} >Guardar</Button>
                    <Link to="/actores" className="btn btn-seconday ms-3">Cancelar</Link>
                </Form>
            )}
        </Formik>
    );
}

interface FormularioActoresProps {
    modelo: actorCreacionDTO,
    onSubmit(values: actorCreacionDTO, accion: FormikHelpers<actorCreacionDTO>): void
}

export default FormularioActores;
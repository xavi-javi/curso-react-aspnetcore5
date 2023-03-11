import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { cineCreacionDTO } from "./cines.model";
import * as Yup from "yup";
import MapaFormulario from "../utils/MapaFormulario";
import { coordenadaDTO } from "../utils/coordenadas.model";

function FormularioCines(props: FormularioCinesProps) {

    function transformarCoordenada(): coordenadaDTO[] | undefined {

        if (props.modelo.latitud && props.modelo.longitud) {

            const respuesta: coordenadaDTO = {
                lat: props.modelo.latitud,
                lng: props.modelo.longitud
            }

            return [respuesta];
        }

        return undefined;
    }

    return (
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({ nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()})}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre:" />
                    <div className="my-3">
                        <MapaFormulario campoLat="latitud" campoLng="longitud" coordenadas={transformarCoordenada()} />
                    </div>
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

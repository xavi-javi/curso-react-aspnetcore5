import { ErrorMessage, Field } from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";

function FormGroupText(props: FormGroupTextProps) {
    return (
        <div className="mb-3">
            <label htmlFor={props.campo} className="form-label">{props.label}</label>
            <Field name={props.campo} className="form-control"></Field>
            <ErrorMessage name={props.campo}>{mensaje =>
                <MostrarErrorCampo mensaje={mensaje}></MostrarErrorCampo>}
            </ErrorMessage>
        </div>
    );
}

interface FormGroupTextProps {
    campo: string,
    label?: string,
    placeholder?:string
}

export default FormGroupText;

import { useFormik, useFormikContext } from "formik";
import FormatDate from "./FormatDate";
import MostrarErrorCampo from "./MostrarErrorCampo";

function FormGroupFecha(props: FormGroupFechaProps) {

    const { values, validateForm, touched, errors } = useFormikContext<any>();

    return (
        <>
            <div className="mb-3">
                <label htmlFor={props.campo} className="form-label">{props.label}</label>
                <input id={props.campo} name={props.campo} type="date" className="form-control"
                defaultValue={values[props.campo] ? FormatDate(values[props.campo]) : undefined}
                onChange={e => {
                    const fecha = new Date(e.currentTarget.value + 'T00:00:00');
                    values[props.campo] = fecha;
                    validateForm();
                }}
                />
                {
                    touched[props.campo] && errors[props.campo] ?
                    <MostrarErrorCampo mensaje={errors[props.campo]?.toString()!} /> : null
                }
            </div>
        </>
    );
}

interface FormGroupFechaProps {
    campo: string;
    label: string;
}

export default FormGroupFecha;
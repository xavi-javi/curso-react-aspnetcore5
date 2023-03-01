import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";

function FormGroupImagen(props: FormGroupImagenProps) {

    const [imagenBase64, setImageBase64] = useState('');
    const [imagenURL, setIamgenURL] = useState(props.imagenURL);
    const {values} = useFormikContext<any>();

    const manejarOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            const archivo = e.currentTarget.files[0];

            aBase64(archivo)
                .then((valor: string) => setImageBase64(valor))
                .catch(error => console.error(error));

            values[props.campo] = archivo;

            setIamgenURL('');
        }
    };

    const aBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    };

    return (
        <>
            <div className="mb-3">
                <label htmlFor={props.campo} className="form-label">{props.label}</label>
                <input id={props.campo} name={props.campo} type="file" className="form-control" accept=".jpg,.jpeg,.png,.gif" onChange={manejarOnChange} />
            </div>
            {imagenBase64 ?
                <div className="mb-3">
                    <img src={imagenBase64} alt="Imagen" style={{width: "450px", height: "auto"}}></img>
                </div>
                : null
            }
            {imagenURL ?
                <div className="mb-3">
                    <img src={imagenURL} alt="Imagen" style={{width: "450px", height: "auto"}}></img>
                </div>
                : null
            }
        </>
    );
}

interface FormGroupImagenProps {
    campo: string;
    label: string;
    imagenURL: string;
}

FormGroupImagen.defaultProps = {
    imagenURL: ''
}

export default FormGroupImagen;

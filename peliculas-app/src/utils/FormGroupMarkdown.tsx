import { Field, useFormikContext } from "formik";
import ReactMarkdown from "react-markdown";

function FormGroupMarkdown(props: FormGroupMarkdownProps) {

    const {values} = useFormikContext<any>();

    return (
        <>
            <div className="mb-3">
            <label className="form-label">{props.label}</label>
                <div className="d-flex">
                    <div>
                        <Field name={props.campo} as="textarea" className="form-control" style={{width: "500px", height: "500px", border: "1px dashed solid"}} />
                    </div>
                    <div className="ms-3">
                        <div className="p-3" style={{width: "500px", height: "500px", border: "1px dashed black"}}>
                            <ReactMarkdown>
                                {values[props.campo]}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

interface FormGroupMarkdownProps {
    campo: string;
    label: string;
}

export default FormGroupMarkdown;

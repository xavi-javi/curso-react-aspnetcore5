import { Field, Form, Formik } from "formik";
import { generoDTO } from "../generos/generos.model";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";

function FiltrarPelicula() {

    const valorInicial: filtroPeliculasForm = {
        titulo: '',
        generoId: 0,
        proximosEstrenos: false,
        enCines: false
    };

    const generos: generoDTO[] = [
        {id: 1, nombre: 'Acción'},
        {id: 2, nombre: 'Comedia'}
    ];

    return (
        <>
            <h3>Filtrar Película</h3>

            <Formik initialValues={valorInicial}
                onSubmit={(values) => console.log(values)}
            >
                {(formikProps) => (
                    <Form>
                        <div className="d-flex justify-content-between align-items-end flex-wrap">
                            <div>
                            <label htmlFor="titulo" className="form-label">Título de la Película</label>
                                {/* De está forma se puede usar un input sin el Field de Formik pero no están recomendable */}
                                <input id="titulo" type="text" className="form-control" placeholder="Título de la Pélicula"
                                    {...formikProps.getFieldProps('titulo')}
                                />
                            </div>
                            <div>
                                <label htmlFor="genero" className="form-label">Género</label>
                                <select id="genero" className="form-select"
                                    {...formikProps.getFieldProps('generoId')}
                                >
                                    <option value="0">Selecciona un género</option>
                                    {generos.map( genero =>
                                        <option key={genero.id} value={genero.id}>{genero.nombre}</option>
                                    )}
                                </select>
                            </div>
                            <div>
                                <div className="form-check">
                                    <Field id="proximosEstrenos" name="proximosEstrenos" type="checkbox" className="form-check-input" />
                                    <label htmlFor="proximosEstrenos" className="form-check-label">
                                        Próximos Estrenos
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className="form-check">
                                    <Field id="enCines" name="enCines" type="checkbox" className="form-check-input" />
                                    <label htmlFor="enCines" className="form-check-label">
                                        En Cines
                                    </label>
                                </div>
                            </div>
                            <div>
                                <Button
                                    onClick={() => formikProps.submitForm()}
                                >
                                    Filtrar
                                </Button>
                            </div>
                            <div>
                                <Button
                                    onClick={() => formikProps.setValues(valorInicial)}
                                >
                                    Limpiar
                                </Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

interface filtroPeliculasForm {
    titulo: string;
    generoId: number;
    proximosEstrenos: boolean;
    enCines: boolean;
}

export default FiltrarPelicula;

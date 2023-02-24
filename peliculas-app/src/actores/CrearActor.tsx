import FormularioActores from "./FormularioActores";

function CrearActor() {
    return (
        <>
            <h3>Crear Actor</h3>
            <FormularioActores modelo={{nombre: '', fechaNacimiento: undefined}}
                onSubmit={values => {console.log(values)}}
            />
        </>
    );
}

export default CrearActor;
import FormularioActores from "./FormularioActores";

function EditarActor() {
    return (
        <>
            <h3>Crear Actor</h3>
            <FormularioActores modelo={{nombre: 'Nathan', fechaNacimiento: new Date('1995-05-05T:00:00:00')}}
                onSubmit={values => {console.log(values)}}
            />
        </>
    );
}

export default EditarActor;
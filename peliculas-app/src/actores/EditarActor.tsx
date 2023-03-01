import FormularioActores from "./FormularioActores";

function EditarActor() {
    return (
        <>
            <h3>Crear Actor</h3>
            <FormularioActores modelo={{
                    nombre: 'Nathan',
                    fechaNacimiento: new Date('1991-05-11T00:00:00'),
                    fotoURL: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_FMjpg_UY576_.jpg',
                    biografia:
`## El tomas
De prueba
`
                }}
                onSubmit={values => {console.log(values)}}
            />
        </>
    );
}

export default EditarActor;
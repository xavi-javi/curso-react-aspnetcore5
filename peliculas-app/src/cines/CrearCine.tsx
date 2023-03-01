import FormularioCines from "./FormularioCines";

function CrearCine() {
    return (
        <>
            <h3>Crear Cine</h3>
            <FormularioCines modelo={{nombre: ''}} onSubmit={async values => {
                    await new Promise(r => setTimeout(r, 3000));
                    console.log(values)
                }}
            />
        </>
    );
}

export default CrearCine;

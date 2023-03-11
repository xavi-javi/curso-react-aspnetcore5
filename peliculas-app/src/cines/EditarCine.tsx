import FormularioCines from "./FormularioCines";

function EditarCine() {
    return (
        <>
            <h3>Editar Cine</h3>
            <FormularioCines modelo={{nombre: 'Cine Maya', latitud: 19.420357, longitud: -99.143797}} onSubmit={async values => {
                    await new Promise(r => setTimeout(r, 3000));
                    console.log(values)
                }}
            />
        </>
    );
}

export default EditarCine;

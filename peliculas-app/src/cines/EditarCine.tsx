import FormularioCines from "./FormularioCines";

function EditarCine() {
    return (
        <>
            <h3>Editar Cine</h3>
            <FormularioCines modelo={{nombre: 'Cine Maya'}} onSubmit={async values => {
                    await new Promise(r => setTimeout(r, 3000));
                    console.log(values)
                }}
            />
        </>
    );
}

export default EditarCine;
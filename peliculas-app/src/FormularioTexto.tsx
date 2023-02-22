function FormularioTexto(props: formularioTextoProps) {
    return (
        <>
            <input type="text" onKeyUp={props.manejarKeyUp} />
        </>
    );
}

interface formularioTextoProps {
    manejarKeyUp(texto: React.KeyboardEvent<HTMLInputElement>): void
}

export default FormularioTexto;

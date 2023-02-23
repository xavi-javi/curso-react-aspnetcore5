function MostrarErrorCampo(props: MostrarErrorCampoProps) {
    return (
        <div className="text-danger">{props.mensaje}</div>
    );
}

interface MostrarErrorCampoProps {
    mensaje: string;
}

export default MostrarErrorCampo;

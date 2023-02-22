export default function MostrarTexto(props: mostrarTextoProps) {
  return (
    <>
      <div>El texto ingresado es: {props.texto}</div>
    </>
  );
}

interface mostrarTextoProps {
  texto: string;
}

MostrarTexto.defaultProps = {
    texto: 'valor por defecto defaultProps'
}

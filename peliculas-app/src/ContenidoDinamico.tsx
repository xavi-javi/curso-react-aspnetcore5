function ContenidoDinamico(props: any) {
  // contenido dinamico con operador ternario
  // return (
  //     <>
  //     {props.mostrarMensajeSecreto ? <h3>Este es el mensaje secreto</h3> : <></>}
  //     </>
  // );

  if (props.calificacion > 90) {
    return (
      <>
        <div>
          <h3>{props.nombre}: Excelente calificación</h3>
        </div>
      </>
    );
  } else if (props.calificacion >= 80) {
    return (
      <>
        <div>
          <h3>{props.nombre}: Muy bien hecho</h3>
        </div>
      </>
    );
  } else if (props.calificacion >= 0) {
    return (
      <>
        <div>
          <h3>{props.nombre}: lol ...</h3>
        </div>
      </>
    );
  } else {
    throw `Ha habido un error con la califación de ${props.nombre}`;
  }
}

export default ContenidoDinamico;

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
            <h3>Excelente calificación</h3>
        </div>
      </>
    );
  } else if (props.calificacion >= 80) {
    return (
        <>
          <div>
              <h3>Muy bien hecho</h3>
          </div>
        </>
      );
  } else {
    return (
        <>
          <div>
              <h3>lol ...</h3>
          </div>
        </>
      );
  }
}

export default ContenidoDinamico;

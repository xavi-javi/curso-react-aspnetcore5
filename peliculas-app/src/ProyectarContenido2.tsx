import { ReactElement } from "react";

function ProyectarContenido2(props: proyectarContenido2Props) {
  return (
    <>
      Parte superior: {props.parteSuperior ? props.parteSuperior : <span>Contenido por defecto</span>}
      <hr />
      {props.parteIntermedia}
      <hr />
      {props.parteInferior}
    </>
  );
}

interface proyectarContenido2Props {
  parteSuperior?: ReactElement;
  parteIntermedia: ReactElement;
  parteInferior: ReactElement;
}

export default ProyectarContenido2;

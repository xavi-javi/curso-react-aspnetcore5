import { ReactElement } from "react";

function ProyectarContenido(props: proyectarContenidoProps) {
    return (
        <>
            <h3>Parte superior</h3>
            {props.children}
            <h3>Parte inferior</h3>
        </>
    );
}

interface proyectarContenidoProps {
    children: ReactElement
};

export default ProyectarContenido;

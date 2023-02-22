import { useContext } from "react";
import ValorContext from "./ValorContext";

function Hijo() {

    const valor = useContext(ValorContext);

    return (
        <>
            <h3>Componente Hijo: El valo del context es: {valor}</h3>
        </>
    );
}

export default Hijo;

import { useContext } from "react";
import Hijo from "./Hijo";
import ValorContext from "./ValorContext";

function Padre() {

    const valor = useContext(ValorContext);

    return (
        <>
            <h3>Componente Padre: El valo del context es: {valor}</h3>
            <Hijo />
        </>
    );
}

export default Padre;

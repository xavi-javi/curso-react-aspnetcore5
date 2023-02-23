import { Redirect } from "react-router-dom";

function RedireccionarALanding() {
    return (
        <Redirect to={{pathname: '/'}}></Redirect>
    );
}

export default RedireccionarALanding;

import { useFormikContext } from "formik";
import { coordenadaDTO } from "./coordenadas.model";
import Mapa from "./Mapa";

function MapaFormulario(props: MapaFormularioProps) {

    const {values} = useFormikContext<any>();

    function actualizarCampos(coordenada: coordenadaDTO) {
        values[props.campoLat] = coordenada.lat;
        values[props.campoLng] = coordenada.lng;
    }

    return (
        <Mapa coordendas={props.coordenadas} manejarClickMapa={actualizarCampos}
        />
    );
}

interface MapaFormularioProps {
    coordenadas: coordenadaDTO[];
    campoLat: string;
    campoLng: string
}

MapaFormulario.defaultProps = {
    coordenadas: []
}

export default MapaFormulario;

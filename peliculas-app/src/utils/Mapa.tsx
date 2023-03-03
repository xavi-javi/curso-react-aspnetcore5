import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { coordenadaDTO } from "./coordenadas.model";
import { useState } from "react";

let defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
});

L.Marker.prototype.options.icon = defaultIcon;

function Mapa(props: MapaProps) {

    const [coordenadas, setCoordenadas] = useState<coordenadaDTO[]>([]);

    return (
        <>
            <MapContainer center={[19.420322672457225, -99.14331042408526]} zoom={20} style={{height: props.height}}>
                <TileLayer
                    attribution="React Películas"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ClickMapa setPunto={coordenadasParam => {setCoordenadas([coordenadasParam])}}></ClickMapa>
                {
                    coordenadas.map(coordernada =>
                        <Marcador key={coordernada.lat + coordernada.lng} {...coordernada} />
                )}
            </MapContainer>
        </>
    );
}

interface MapaProps {
    height: string;
}

Mapa.defaultProps = {
    height: '500px'
}

function ClickMapa(props: ClickMapaProps) {
    useMapEvent('click', (e) => {
        props.setPunto({lng: e.latlng.lng, lat: e.latlng.lat});
    });
    return null;
}

interface ClickMapaProps {
    setPunto(coordenadas: coordenadaDTO): void;
}

function Marcador(props: coordenadaDTO) {
    return(
        <Marker position={[props.lat, props.lng]} />
    );
}

export default Mapa;

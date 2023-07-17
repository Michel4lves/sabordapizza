import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import marcador from "../img/marcador.png"

function GeolocationMap() {
    const position = [-31.760754186259962, -52.34255867114873];

    const customIcon = new L.Icon({
        iconUrl: marcador,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -32],
    })

    return (
        <>
            <MapContainer center={position} zoom={16} style={{position: "relative", height: '150px', width: '600px' }}>
                <TileLayer
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position} icon={customIcon}>
                    <Popup>
                        Estamos aqui
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
}

export default GeolocationMap;

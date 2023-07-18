import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import marcador from "../img/marcador.png"

function GeolocationMap() {
    const position = [-31.760754186259962, -52.34255867114873];
    const [mapEnabled, setMapEnabled] = useState(false);
    const mapRef = useRef(null);


    const handleKeyDown = (event) => {
        if (event.ctrlKey || event.metaKey) {
            setMapEnabled(true);
            mapRef.current.scrollWheelZoom.enable();
            mapRef.current.dragging.enable();
        }
    };

    const handleKeyUp = () => {
        setMapEnabled(false);
        mapRef.current.scrollWheelZoom.disable();
        mapRef.current.dragging.disable();
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);


    const customIcon = new L.Icon({
        iconUrl: marcador,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -32],
    })

    return (
        <>
            <MapContainer 
                center={position} 
                zoom={16} 
                style={{position: "relative", height: '100%', width: '100%' }} 
                dragging={mapEnabled}
                scrollWheelZoom={mapEnabled}
                ref={mapRef}
            >
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

import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Map = () => {
  return (
    <div className="w-full h-full bg-blue-50 flex items-center justify-center">
      <MapContainer
        center={[34.2299414, -118.5709483]}
        zoom={16}
        style={{
          height: "100vh",
          width: "100%",
          position: "relative",
          zIndex: 0,
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={[34.2299414, -118.5709483]} icon={customIcon} />
      </MapContainer>
    </div>
  );
};

export default Map;

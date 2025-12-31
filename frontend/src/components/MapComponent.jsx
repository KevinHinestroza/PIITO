import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  // Dummy data; replace with API call
  const positions = [[-33.4489, -70.6693]]; // Santiago

  return (
    <MapContainer center={[-33.4489, -70.6693]} zoom={13} style={{ height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {positions.map((pos, idx) => (
        <Marker key={idx} position={pos}>
          <Popup>Polling Place</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;

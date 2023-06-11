import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Home.css'
import levels from '../components/images/levels.png'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-icon.png'

let iconUbicacion = new L.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
  iconSize: [25, 45],
  iconAnchor: [22, 94],
  shadowAnchor: [22, 94],
  popupAnchor: [-3, -76]
});

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className='container-map'>
          <MapContainer center={[18.8512934,-97.0821171,15]} zoom={14} scrollWheelZoom={false} className='map'>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[18.8512934,-97.0821171,15]} icon={iconUbicacion}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
      </div>
      <div className='container-levels'>
        <img src={levels} alt='img'></img>
      </div>
    </div>
  )
};

export default Home;
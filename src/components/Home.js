import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Home.css'
import levels from '../components/images/levels.png'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-icon.png'
import useSwr from "swr"

let iconUbicacion = new L.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
  iconSize: [25, 45],
  iconAnchor: [22, 94],
  shadowAnchor: [22, 94],
  popupAnchor: [-3, -76]
});

const fetcher = (...args) => fetch(...args).then(response => response.json());

export default function Home() {
  const url =
    "https://api.waqi.info/feed/here/?token=70be8518535702403bbb5626a4b32f7f8cc3acd7";

  const { data, error } = useSwr(url, fetcher);

  const aqis = Array.data && !error ? data.slice(0, 1) : [];

  return (
    <div className='home' id='home'>
      <div className='container-map'>
        <MapContainer center={[19.115858055556, -98.277487222222]} zoom={12} scrollWheelZoom={false} className='map'>
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            maxZoom={20}
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          />
        </MapContainer>

        {aqis.map(aqi =>
          <Marker key={aqi.id}
            position={[aqi.location.latitude, aqi.location.longitude]}
            icon={iconUbicacion}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}
      </div>
      <div className='container-levels'>
        <img src={levels} alt='img'></img>
      </div>
    </div>
  )
};

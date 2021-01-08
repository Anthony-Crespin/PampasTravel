import React, {useState} from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './mapa.css'
import Marcadores from './Marcadores/Marcadores'
import {IoHome} from 'react-icons/io5'
import { Link } from 'react-router-dom'

import {places} from './Marcadores/data.json'

const Mapa = () => {

    const [coordenadas, setCoordenadas] = useState({
        currentLocation: {lat: '-8.1847845', lng: '-77.7935867'},
        zoom: 12
    })

    return (
        <div className="mapa__container">
            <div className="mapa__button">
                <Link to="/">
                    <IoHome/>
                </Link>
            </div>
            <MapContainer center={coordenadas.currentLocation} zoom={coordenadas.zoom} scrollWheelZoom={false}>
                <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" attribution='&copy; Anthony Crespin Diaz'/>
                <Marcadores places={places}/>
            </MapContainer>
        </div>
    )
}

export default Mapa
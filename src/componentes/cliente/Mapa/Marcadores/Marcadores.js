import React from 'react'
import {Marker, Popup, Bindpopup} from 'react-leaflet'
import {IconMarker} from '../IconMarker'

const Marcadores = (props) => {

    const { places } = props;
    const markers = places.map((place, i) => (
        <Marker key={i} position={place.geometry} icon={IconMarker}>
            <Popup>
                <img src={place.url} alt={place.name}/>
                <h2><b>{place.name}</b></h2>
                <p>{place.description}</p>
            </Popup>
        </Marker>
    ));

    return markers;
}

export default Marcadores
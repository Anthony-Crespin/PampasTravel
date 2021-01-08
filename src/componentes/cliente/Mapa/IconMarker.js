import L from 'leaflet'
import brujula from './marker.svg'

export const IconMarker = L.icon({
    iconUrl: brujula,
    iconRetinaUrl: brujula,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [30, 30],
    className: "leaflet-venue-icon",
})

export default IconMarker

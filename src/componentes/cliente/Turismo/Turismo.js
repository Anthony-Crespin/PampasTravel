import React from 'react'
import './turismo.css'
import noche from '../../../videos/noche.mp4'

const Turismo = () => {
    return (
        <div className="turismo__container">
            <video autoPlay loop>
                <source src={noche} type="video/mp4"/>
            </video>
            <div className="turismo__text">
                <h6>MAPA INTERACTIVO</h6>
                <p>Ingresa para conocer la ubicacion de los lugares turisticos, ademas de conocer un poco sobre ellos.</p>
                <a href="/mapa" className="btn btn-primary">VER MAPA</a>
            </div>
        </div>
    )
}

export default Turismo

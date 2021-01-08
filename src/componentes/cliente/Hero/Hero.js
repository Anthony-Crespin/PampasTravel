import React from 'react'
import './Hero.css'
import brujula from '../../../images/brujula.svg'

const Hero = () => {

    return (
        <div className="hero__container">
            <div className="hero__img">
                <img src={brujula} alt="Imagen de una brujula" loading="lazy" />
            </div>
            <div className="hero__texto">
                <h3>VEN Y DESCUBRE</h3>
                <p className="hero__parrafo">Nuestra tierra está llena de aventuras y belleza</p>
                <div className="hero__botones">
                    <p>Ingresa o hazte miembro para colaborar con publicaciones de la página.</p>
                    <button type="button" className="btn btn-primary">Iniciar sesión</button>
                    <button type="button" className="btn btn-secondary">Registrarse</button>
                </div>
            </div>
        </div>
    )
}

export default Hero

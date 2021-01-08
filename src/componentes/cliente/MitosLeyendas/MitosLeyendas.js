import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import './MitosLeyendas.css'
import gatonegro from '../../../images/gatonegro.jpg'
import cerros from '../../../images/cerros.jpg'
import laguna from '../../../images/laguna.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const MitosLeyendas = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])

    return (
        <div className="mitosLeyendas__container">
            <div className="mitosLeyendas__content">
                <div className="mitosLeyendas__texto">
                    <h5 className="mitosLeyendas__titulo">Mitos y leyendas</h5>
                    <p className="mitosLeyendas__parrafo">Nuestra tierra cuenta con una variedad de mitos y leyendas locales, a continuacion mostramos algunos de estos hermosos relatos.</p>
                </div>
                <div className="ml__cards">
                    <div className="ml__card" data-aos="flip-up">
                        <img src={gatonegro} alt="Nombre del mito o leyenda" loading="lazy"/>
                        <div className="ml__texto">
                            <span className="ml__origin">Pampas</span>
                            <h6 className="ml__nombre"><Link to="#">El gato negro</Link></h6>
                            <p className="ml__extracto">No espero ni pido que alguien crea en el extraño aunque simple relato que me dispongo a escribir...</p>
                        </div>
                    </div>
                    <div className="ml__card" data-aos="flip-up">
                        <img src={cerros} alt="Nombre del mito o leyenda" loading="lazy"/>
                        <div className="ml__texto">
                            <span className="ml__origin">Tres lagunas</span>
                            <h6 className="ml__nombre"><Link to="#">Cerros que hablan</Link></h6>
                            <p className="ml__extracto">No espero ni pido que alguien crea en el extraño aunque simple relato que me dispongo a escribir...</p>
                        </div>
                    </div>
                    <div className="ml__card" data-aos="flip-up">
                        <img src={laguna} alt="Nombre del mito o leyenda" loading="lazy"/>
                        <div className="ml__texto">
                            <span className="ml__origin">Jongos</span>
                            <h6 className="ml__nombre"><Link to="#">La laguna de jarrococha</Link></h6>
                            <p className="ml__extracto">No espero ni pido que alguien crea en el extraño aunque simple relato que me dispongo a escribir...</p>
                        </div>
                    </div>
                </div>
                <div className="ml__botones">
                    <button className="btn btn-primary">VER MÁS</button>
                </div>
            </div>
        </div>
    )
}

export default MitosLeyendas

import React from 'react'
import './Galeria.css'
import uno from '../../../images/uno.jpg'
import dos from '../../../images/dos.jpg'
import tres from '../../../images/tres.jpg'
import cuatro from '../../../images/cuatro.jpg'
import cinco from '../../../images/cinco.jpg'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox"

const Galeria = () => {
    return (
        <div className="galeria__container">
            <div className="galeria__content">
                <div className="galeria__texto">
                    <h5 className="galeria__titulo">Galeria</h5>
                    <p className="galeria__parrafo">Nuestra tierra cuenta con una variedad de mitos y leyendas locales, a continuacion mostramos algunos de estos hermosos relatos.</p>
                </div>
                <SimpleReactLightbox>
                    <SRLWrapper>
                        <div className="galeria__cards">
                            <div className="galeria__card" data-aos="fade-left">
                                <img src={uno} alt="Nombre del mito o leyenda" loading="lazy"/>
                            </div>
                            <div className="galeria__card" data-aos="fade-left">
                                <img src={dos} alt="Nombre del mito o leyenda" loading="lazy"/>
                            </div>
                            <div className="galeria__card" data-aos="fade-left">
                                <img src={tres} alt="Nombre del mito o leyenda" loading="lazy"/>
                            </div>
                            <div className="galeria__card" data-aos="fade-left">
                                <img src={cuatro} alt="Nombre del mito o leyenda" loading="lazy"/>
                            </div>
                            <div className="galeria__card" data-aos="fade-left">
                                <img src={cinco} alt="Nombre del mito o leyenda" loading="lazy"/>
                            </div>
                            <div className="galeria__card" data-aos="fade-left">
                                <img src={cuatro} alt="Nombre del mito o leyenda" loading="lazy"/>
                            </div>
                            <div className="galeria__card" data-aos="fade-left">
                                <img src={cinco} alt="Nombre del mito o leyenda" loading="lazy"/>
                            </div>
                        </div>
                    </SRLWrapper>
                </SimpleReactLightbox>
                <div className="ml__botones">
                    <button className="btn btn-primary">VER MÁS</button>
                </div>
            </div>
        </div>
    )
}

export default Galeria

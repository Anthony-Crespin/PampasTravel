import React, {useEffect} from 'react'
import './About.css'
import pampasMap from '../../../images/pampasMap.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, [])

    return (
        <div className="about__container">
            <div className="about__content">
                <div className="about__text" data-aos="fade-right">
                    <h4>Acerca de</h4>
                    <p><b>Pampas Travel</b> es una página realizada con el propósito de mostrar la cultura de nuestro distrito, lugares turisticos, folclore, personajes, mitos y leyendas además de los hermosos paisajes que embellecen nuestra tierra; la meta principal de la plataforma es dar a conocer todas éstas riquezas, permitir a las personas que tienen el objetivo de compartir fotografías, noticias y más contenido, acceder a ésta página e interactuar con el contenido que esta ofrece.</p>
                </div>
                <div className="about__img">
                    <img src={pampasMap} alt="Mapa de pampas 3D" data-aos="fade-left"/>
                </div>
            </div>
        </div>
    )
}

export default About

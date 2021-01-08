import React from 'react'
import './footer.css'
import {FaFacebookF, FaInstagram, FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__content">
                <div className="footer__contacto">
                    <div className="footer__text">
                        <h5>Conversemos un poco!!!</h5>
                        <hr/>
                        <p>Escribenos para brindarte informacion acerca del sitio o de los lugares turisticos, ademas, si tienes alguna idea para mejorar la experiencia de usuario no dudes en contactarnos.</p>
                    </div>
                    <form className="footer__form" action="">
                        <input type="text" name="nombre" placeholder="Nombre completo*" />
                        <input type="mail" name="correo" placeholder="Correo electronico*" />
                        <input type="tel" name="celular" placeholder="Telefono*" />
                        <textarea name="mensaje" id="mensaje" placeholder="Mensaje*"></textarea>
                    </form>
                </div>
                <div className="footer__main">
                    <div className="footer__copy">
                        <p>© Pampas travel 2020 | Todos los derechos reservados</p>
                    </div>
                    <div className="footer__redes">
                        <ul>
                            <li><a href="https://www.facebook.com/cristiananthony.crespindiaz" target="_blank"><FaFacebookF/></a></li>
                            <li><a href="https://www.instagram.com/anthonycrespindiaz/" target="_blank"><FaInstagram/></a></li>
                            <li><a href="https://github.com/Anthony-Crespin" target="_blank"><FaGithub/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
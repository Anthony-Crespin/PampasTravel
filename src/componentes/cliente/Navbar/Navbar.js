import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {HiMenu} from 'react-icons/hi'

const Navbar = () => {

    const [menuMovil, setMenuMovil] = useState(false)
    
    const showMenu = () => setMenuMovil(!menuMovil)

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="header__logo">
                        <h1>PAMPAS TRAVEL</h1>
                    </div>
                    <nav className="header__nav">
                        <div className="header__btn" onClick={showMenu}>
                            <HiMenu fontSize="2.3rem"/>
                        </div>
                        <ul className={menuMovil ? 'header__list open' : 'header__list'} data-animation="inOut" >
                            <li className="header__item">
                                <Link to="/" className="header__link">Inicio</Link>
                            </li>
                            <li className="header__item">
                                <Link to="/mitos" className="header__link">Mitos y leyendas</Link>
                            </li>
                            <li className="header__item">
                                <Link to="/galeria" className="header__link">Galería</Link>
                            </li>
                            <li className="header__item">
                                <Link to="/blog" className="header__link">Blog</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__welcome">
                        <h2><b>Bienvenido, Viajero!!!</b></h2>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar

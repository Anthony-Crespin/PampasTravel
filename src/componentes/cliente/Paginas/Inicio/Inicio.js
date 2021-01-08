import React from 'react'
import About from '../../About/About'
import Footer from '../../Footer/Footer'
import Galeria from '../../Galeria/Galeria'
import Landing from '../../Landing/Landing'
import MitosLeyendas from '../../MitosLeyendas/MitosLeyendas'
import Suscripcion from '../../Suscripcion/Suscripcion'
import Turismo from '../../Turismo/Turismo'

export default function Inicio() {
    return (
        <>
            <Landing/>
            <About/>
            <MitosLeyendas/>
            <Galeria/>
            <Suscripcion/>
            <Turismo/>
            <Footer/>
        </>
    )
}

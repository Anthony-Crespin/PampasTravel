import React from 'react'
import './Suscripcion.css'

const Suscripcion = () => {
    return (
        <div className="sp__container">
            <div className="sp__content">
                <p className="sp__message">Para estar al tanto de las nuevas publicaciones y actualizaciones de la pagina, suscribete para recibir las notificaciones.</p>
                <form action="" className="sp__formulario">
                    <input type="text" placeholder="Ingrese su correo..." name=""/>
                    <button type="submit" className="btn btn-secondary">Suscribirse</button>
                </form>
            </div>
        </div>
    )
}

export default Suscripcion

import React from 'react'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import './Landing.css'

const Landing = () => {
    return (
        <div className="landing__container">
            <Navbar/>
            <Hero/>
        </div>
    )
}

export default Landing

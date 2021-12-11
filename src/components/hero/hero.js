import React from 'react'
import { Link } from 'react-router-dom'
import './hero.css'

const Hero = (heroimage) =>
{

    return(

        <div className="hero-container">
            <div className="overlay"></div>
            <h1 className="hero-text">WHERE TRADITION LIVES</h1>
            <h1 className="hero-text">AND <span>LEGENDS</span> PLAY</h1>
            <Link className="hero-button" to="/Concerts">View Concerts</Link>
        </div>

    )

}

export default Hero;
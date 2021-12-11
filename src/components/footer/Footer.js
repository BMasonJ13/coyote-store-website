
import React from "react";
import { Link } from 'react-router-dom'
import './Footer.css'
import Logo from '../navbar/LogoRedOnWhite.png'

const Footer = () => 
{
    return(
        <div className="footer-container">
            <div className="links-container">
                <ul>
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/About">About</Link>
                    <Link className="nav-link" to="/Concerts">Concerts</Link>
                </ul>
            </div>
            <div className="media-container">
            </div>
            <img className="logo" src={Logo} alt=""></img>
            <div className="page-owner">
                <h4>&copy; 2022 The Legendary Coyote Store</h4>
            </div>
        </div>
    )
}

export default Footer;
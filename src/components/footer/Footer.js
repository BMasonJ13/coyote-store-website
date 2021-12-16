
import React from "react";
import './Footer.css'
import Logo from '../navbar/LogoRedOnWhite.png'

const Footer = () => 
{
    return(
        <div className="footer-container">
            <div className="media-container">
            </div>
            <img className="logo-footer" src={Logo} alt=""></img>
            <div className="page-owner">
                <h4>&copy; 2022 The Legendary Coyote Store</h4>
            </div>
        </div>
    )
}

export default Footer;
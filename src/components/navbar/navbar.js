
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './LogoRedOnWhite.png'
import './navbar.css'

const NavBar = () => 
{

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    }

    return(
        <header>
        <div className="navigation-container">
            <Link className="logo-link" to="/">
                <img className="logo" src={Logo} alt=""></img>
            </Link>
            <nav>
                <ul>
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/About">About</Link>
                    <Link className="nav-link" to="/Contact">Contact</Link>
                    <Link className="nav-link" to="/FAQ">FAQ</Link>
                    <Link className="nav-link" to="/Supporters">Supporters</Link>
                    <Link className="nav-link" to="/Gallery">Gallery</Link>
                    {/* <Link className="nav-link" to="/Cafe">Cafe</Link> */}
                    <Link className="nav-link" to="/Merch">Merch</Link>
                    <Link className="nav-link" id="action" to="/Concerts">Concerts</Link>
                </ul>
            </nav>
            <div className={isActive ? "hamburger is-active" : "hamburger"} onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
            <nav className={isActive ? "is-active-drawer" : "not-active"}>
                <ul>
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/About">About</Link>
                    <Link className="nav-link" to="/Contact">Contact</Link>
                    <Link className="nav-link" to="/FAQ">FAQ</Link>
                    <Link className="nav-link" to="/Supporters">Supporters</Link>
                    <Link className="nav-link" to="/Gallery">Gallery</Link>
                    <Link className="nav-link" to="/Cafe">Cafe</Link>
                    <Link className="nav-link" to="/Merch">Merch</Link>
                    <Link className="nav-link" to="/Concerts">Concerts</Link>
                </ul>
            </nav>
        </header>

    )

}

export default NavBar;
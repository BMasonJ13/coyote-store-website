
import React from "react";

import NavBar from "../components/navbar/navbar";
import SVGBanner from '../components/svg-banner/SVGBanner'
import Footer from "../components/footer/Footer";

import CoyoteSign from '../res/CoyoteSign.jpg'
import WhiteBanner from '../res/svg/WhiteBanner.svg'

import './cafe.css'

const Cafe = () =>
{

    return(
        <>
            <NavBar />
            <div className="cafe-banner-section">
                <SVGBanner 
                svg={WhiteBanner}
                title="BOOK A PRIVATE PARTY" 
                action="Contact"
                path="/Contact"
                black
                />
            </div>
            <div className="cafe-info-container">
                <h2>Cafe Hours</h2>
                <div className="cafe-info-row">
                    <h3>Friday: 10am - 8pm</h3>
                </div>
                <div className="cafe-info-row">
                    <h3>Saturday: 10am - 2pm (Midnight on show days)</h3>
                </div>
                <div className="cafe-info-row">
                    <h3>Sunday: 10am - 2pm</h3>
                </div>
                <h2>MENU</h2>
            </div>
            <Footer />
        </>
    )

}

export default Cafe;
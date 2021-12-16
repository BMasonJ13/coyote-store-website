
import React from "react";

import NavBar from "../components/navbar/navbar";
import Banner from "../components/banner/banner";
import Footer from "../components/footer/Footer";

import PartyImage from '../res/Party.jpg'

import './cafe.css'

const Cafe = () =>
{

    return(
        <>
            <NavBar />
            <div className="cafe-banner-section">
                <Banner image={PartyImage}/>
            </div>
            <Footer />
        </>
    )

}

export default Cafe;
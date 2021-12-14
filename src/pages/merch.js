import React from 'react'
import './merch.css'

import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/Footer'

const Merch = () => 
{

    return(
        <>
            <NavBar />
            <div className="test-container">
                <h1 className="test">COMING SOON!</h1>
            </div>
            <div className="footer-stick">
            <Footer />
            </div>
        </>
    )

}

export default Merch;
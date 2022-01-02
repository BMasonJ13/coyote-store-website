import React from 'react'
import './merch.css'

import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/Footer'
import CoyoteLogo from '../res/svg/CoyoteLogo.svg'

const Merch = () => 
{

    return(
        <>
            <NavBar />
            <div className="test-container">
                <img className="merch-svg" src={CoyoteLogo} alt=""/>
            </div>
            <h1>Introducing The Crazy Coyote</h1>
            <p className="merch-paragraph">The Legendary Coyote Store is proud to announce our latest lineup of accessories. Launching in Q1 of 2022, The Legendary Coyote Store will have all new hats, shirts, accessories, and much more. Our 2022 merch lineup will be avaible online and at our concert venue.</p>
            <div className="merch-footer-stick">
            <Footer />
            </div>
        </>
    )

}

export default Merch;
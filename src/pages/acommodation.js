
import React from 'react'
import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/Footer'

import ContactCard from '../components/contact-card/ContactCard'

import FFPic from '../res/FairfieldInn.png'
import GTPic from '../res/GailTrail.jpg'

import './accommodation.css'

const Accommodation = () =>
{

    return(
        <>
            <NavBar />
            <div className="accommodation-container">
                <ContactCard 
                image={FFPic}
                name="The Fairfield Inn"
                description="Contact for rooms at special coyote family prices."
                phone="(325) 573-1400"
                
                />
                <ContactCard 
                image={GTPic}
                name="Gail Trails"
                description="Contact for rental spaces to park a RV."
                phone="(806) 777-5376"
                
                />
            </div>
            <div className="acc-footer">
                <Footer />
            </div>
        </>
    )

}

export default Accommodation
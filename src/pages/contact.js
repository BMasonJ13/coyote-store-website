
import React from "react";
import './contact.css'
import NavBar from "../components/navbar/navbar";
import ContactCard from "../components/contact-card/ContactCard";
import Footer from "../components/footer/Footer";

import Becky from '../res/BeckyPic.png'
//import Rika from '../res/RikaPic.jpg'

const Contact = () => {

    return (
        <>
            <NavBar />
            <div className="contact-page">
                <div className="contact-card-section">
                    <ContactCard
                        image={Becky}
                        name="Becky Justice Ford"
                        description="Contact for venue rentals, sponsorships, advertising, booking, and annual table sales."
                        email="CoyoteCountryStore@gmail.com"
                        phone="(806) 759-9355"
                    />
                    
                </div>
            </div>
            <div className="contact-footer">
                <Footer />
            </div>
        </>
    )

}

export default Contact;
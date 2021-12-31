
import React from "react";
import './contact.css'
import NavBar from "../components/navbar/navbar";
import ContactCard from "../components/contact-card/ContactCard";
import Footer from "../components/footer/Footer";

import Becky from '../res/BeckyPic.png'
import Ben from '../res/BenPic.jpg'
import Rika from '../res/RikaPic.png'

const Contact = () =>
{

    return(
        <>
            <NavBar />
            <div className="contact-card-section">
                <ContactCard
                image={Becky}
                name="Becky Justice Ford"
                description="Contact for venue rentals, sponsorships, advertising, and annual table sales."
                email="TheLegendaryCoyoteStore@gmail.com"
                phone="(806) 759-9355"
                />
                <ContactCard
                image={Ben}
                name="Benton Justice"
                description="Contact for business and personal websites."
                email="BMasonJ13@gmail.com"
                phone="(806) 789-2056"
                />
                <ContactCard
                image={Rika}
                name="Rika Law"
                description="Contact for catering."
                email="CoyoteCountryStore@gmail.com"
                phone="(806) 759-8570"
                />
            </div>
            <div className="contact-footer">
            <Footer />
            </div>
        </>
    )

}

export default Contact;
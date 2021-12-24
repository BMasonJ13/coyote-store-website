
import React from "react";
import './contact.css'
import NavBar from "../components/navbar/navbar";
import ContactCard from "../components/contact-card/ContactCard";
import Footer from "../components/footer/Footer";

const Contact = () =>
{

    return(
        <>
            <NavBar />
            <div className="contact-card-section">
                <ContactCard
                name="Becky Justice Ford"
                description="Contact for venue rentals, sponsorships, advertising, and annual table sales."
                email="TheLegendaryCoyoteStore@gmail.com"
                phone="(806) 759-9355"
                />
                <ContactCard
                name="Benton Justice"
                description="Contact for business and personal websites."
                email="BMasonJ13@gmail.com"
                phone="(806) 789-2056"
                />
                <ContactCard
                name="Rika Law"
                description="EPIC"
                email="CoyoteCountryStore@gmail.com"
                phone="(806) 759-8570"
                />
            </div>
            <div className="footer-stick">
                <Footer />
            </div>
        </>
    )

}

export default Contact;
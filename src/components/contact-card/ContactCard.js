import React from "react";
import './ContactCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'

const ContactCard = ({image, name, description, email, phone}) =>
{

    return(
        <div className="contact-card-container">
            <div className="contact-card-image-container">
                <img className="contact-card-image" src={image} alt=""/>
            </div>
            <div className="contact-bottom-container">
                <div className="contact-info-row">
                    <FontAwesomeIcon icon={Icons.faUser} />
                    <h3>{name}</h3>
                </div>
                
                <div className="contact-info-row">
                    <FontAwesomeIcon icon={Icons.faEnvelope} />
                    <h3>{email}</h3>
                </div>
                <div className="contact-info-row">
                    <FontAwesomeIcon icon={Icons.faPhone} />
                    <h3>{phone}</h3>
                </div>
                <div className="contact-info-row">
                    <FontAwesomeIcon icon={Icons.faPen} />
                    <h3>{description}</h3>
                </div>
            </div>
        </div>
    )

}

export default ContactCard;
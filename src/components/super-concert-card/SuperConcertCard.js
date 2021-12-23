
import React from "react";
import './SuperConcertCard.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'


const SuperConcertCard = ({image, nameA, nameB, nameC, date, time, path}) =>
{

    return(
        <div className="super-concert-card-container">
            <h2 className="super-concert-card-title">COYOTE SUPER SHOW</h2>

            <img className="super-concert-card-image" src={image} alt=""/>

            <div className="super-concert-bottom-container">
                <div className="super-concert-card-row">
                    <FontAwesomeIcon icon={Icons.faUser}/>
                    <h3>{nameA}</h3>
                </div>
                <div className="super-concert-card-row">
                    <FontAwesomeIcon icon={Icons.faUser}/>
                    <h3>{nameB}</h3>
                </div>
                <div className="super-concert-card-row">
                    <FontAwesomeIcon icon={Icons.faUser}/>
                    <h3>{nameC}</h3>
                </div>
                <div className="super-concert-card-row">
                    <FontAwesomeIcon icon={Icons.faCalendar}/>
                    <h3>{date}</h3>
                </div>
                <div className="super-concert-card-row">
                    <FontAwesomeIcon icon={Icons.faClock}/>
                    <h3>{time}</h3>
                </div>
                <div className="super-concert-card-row">
                    <div id="beer">
                        <FontAwesomeIcon icon={Icons.faBeer}/>
                    </div>
                    <h3>BYOB</h3>
                </div>
                <a className="super-concert-ticket-button" href={path} target="_blank" rel="noopener noreferrer">GET TICKETS</a>
            </div>
        </div>
    )
}

export default SuperConcertCard;
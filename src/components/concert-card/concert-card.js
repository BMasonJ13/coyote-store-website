
import React from 'react'
import './concert-card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'

const ConcertCard = ({image, artistName, date, time, path, facebookLink}) =>
{

    return(
        
        <div className="concert-card-container">
            <div className="image-container">
                <img src={image} alt=""></img>
            </div>
            <div className="concert-card-bottom">
                <div className="info-container">
                    <div className="info-row">
                        <FontAwesomeIcon className="icon" icon={Icons.faUser} />
                        <h3>{artistName}</h3>
                    </div>
                    <div className="info-row">
                        <FontAwesomeIcon className="icon" icon={Icons.faCalendar} />
                        <h3 >{date.substring(0, date.length - 2)}<sup className="super">{date.substring(date.length - 2)}</sup></h3>
                    </div>
                    <div className="info-row">
                        <FontAwesomeIcon className="icon" icon={Icons.faClock} />
                        <h3>{time}</h3>
                    </div>
                    <div className="info-row">
                        <FontAwesomeIcon className="icon" id="beer" icon={Icons.faBeer} />
                        <h3>BYOB</h3>
                    </div>
                </div>
                <a className="concert-ticket-button" href={path} target="_blank" rel="noopener noreferrer">{"GET TICKETS"}</a>
            </div>
        </div>

    )

}

export default ConcertCard;
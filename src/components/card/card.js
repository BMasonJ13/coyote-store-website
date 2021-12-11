import React from 'react'
import './card.css'

const Card = ({imageURL, date, firstName, lastName}) =>
{

    return(
        <div className="card-container">
            <h1 className="artist-name">{firstName} <span>{lastName}</span></h1>
            <div className="image-container">
            <img className="card-image" src={imageURL} alt=""/>
                <div className="date-ribbon">
                    <h3>{date}</h3>
                </div>
            </div>
            <button className="action-button">GET TICKETS</button>
        </div>
    )

}

export default Card;
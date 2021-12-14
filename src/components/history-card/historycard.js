import './historycard.css'
import React from 'react'

const HistoryCard = ({image, title, details}) =>
{

    return(
        <div className="history-card">
            <img className="history-card-image" src={image} alt=""></img>
            <h3 className="history-card-title">{title}</h3>
            <p className="history-card-details">{details}</p>
        </div>
    )

}

export default HistoryCard;
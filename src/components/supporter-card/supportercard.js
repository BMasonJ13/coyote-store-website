import React from "react";
import './supportercard.css'

const SupporterCard = ({image, name}) =>
{

    return(
        <div className="supporter-card-container">
            <img className="supporter-card-image" src={image} alt=""></img>
            <h3 className="supporter-card-name">{name}</h3>
        </div>
    )

}

export default SupporterCard
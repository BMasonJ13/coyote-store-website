import React from "react";
import './supportercard.css'

const SupporterCard = ({image, name, path}) =>
{

    return(
        <div className="supporter-card-container">
            <img className="supporter-card-image" src={image} alt=""></img>
            <h3 className="supporter-card-name">{name}</h3>
            {path ? <a  className="supporter-card-action" href={path} target="_blank" rel="noopener noreferrer">VISIT WEBSITE</a> : <></>}
        </div>
    )

}

export default SupporterCard
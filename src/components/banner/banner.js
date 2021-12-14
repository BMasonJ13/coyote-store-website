import './banner.css'
import React from 'react'

const Banner = ({image, title}) =>
{

    return(
        <div className="banner-container">
            <img src={image} alt="" className="banner-image"></img>
            <div className="banner-text-container">
                <h3 className="banner-text">{title}</h3>
            </div>
        </div>
    );

}

export default Banner;
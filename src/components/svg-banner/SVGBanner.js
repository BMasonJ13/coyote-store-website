
import React from 'react'
import { Link } from 'react-router-dom';

import './SVGBanner.css'

const SVGBanner = ({svg, title, action, path, black, buttonBlack}) =>
{

    return(

        <div className="svg-banner-container">
            <img className="svg-banner-image" src={svg} alt=""/>
            <h1 className={black ? "svg-banner-title-black" : "svg-banner-title"}>{title}</h1>
            <Link className={buttonBlack ? "svg-banner-action-black" : "svg-banner-action"} to={path}><h2>{action}</h2></Link>
        </div>

    )

}

export default SVGBanner;
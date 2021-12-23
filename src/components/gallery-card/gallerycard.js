
import React from 'react'

import './gallerycard.css'

const GalleryCard = ({image}) =>
{

    return(
        <div className="gallery-card-container">
            <img className="gallery-card-image" src={image} alt=""/>
        </div>
    )

}

export default GalleryCard;
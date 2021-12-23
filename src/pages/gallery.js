
import React from "react";
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/Footer'

import GalleryData from "../components/gallery-card/gallerydata";
import GalleryCard from "../components/gallery-card/gallerycard";

import './gallery.css'

const Gallery = () =>
{

    return(
        <>
            <Navbar />
            <div className="gallery-gallery-card-section">
                {GalleryData.map((gallery) => (
                    <GalleryCard image={gallery.image} />
                ))}
            </div>
            <Footer />
        </>
    )

}

export default Gallery;
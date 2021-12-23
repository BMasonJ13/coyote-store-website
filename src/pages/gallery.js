
import React from "react";
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/Footer'
import { Carousel } from 'react-carousel-minimal'

import GalleryData from "../components/gallery-card/gallerydata";

import './gallery.css'

const Gallery = () =>
{

    return(
        <>
            <Navbar />
            <section>
            <Carousel 
                data={GalleryData}
                time={4000}
                automatic={true}
                width="1080px"
                height="50vh"
                slideBackgroundColor="#242424"
                slideImageFit="cover"
                />
            </section>
            <div className="footer-stick">
                <Footer />
            </div>
        </>
    )

}

export default Gallery;
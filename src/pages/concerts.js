import React from "react"
import NavBar from "../components/navbar/navbar"
import Footer from "../components/footer/Footer"
import ConcertCard from '../components/concert-card/concert-card'
import './concerts.css'

import ConcertData from '../components/concert-card/concert-data'
import SVGBanner from '../components/svg-banner/SVGBanner'
import RedBanner from '../res/svg/RedBanner.svg'

const Concerts = () => {

    return (
        <>
            <NavBar />
            <div className="concert-banner" id="top">
                <SVGBanner 
                svg={RedBanner}
                title="Need a place to stay or park a RV?"
                action="ACCOMMODATIONS"
                path="/Accommodations"
                black
                buttonBlack                
                />
            </div>
            <div className="concert-cards-container"> 
                {ConcertData.map((concert) => (
                    <ConcertCard image={concert.image} 
                    artistName={concert.artistName} 
                    date={concert.date} 
                    time={concert.time}
                    path={concert.path}
                    facebookLink={concert.facebookLink}
                    />
                ))}
               
            </div>
            <div className="super-card-sect">
                    
                </div>
            <Footer />
        </>
    )
}


export default Concerts;
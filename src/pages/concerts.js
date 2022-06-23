import React from "react"
import NavBar from "../components/navbar/navbar"
import Footer from "../components/footer/Footer"
import ConcertCard from '../components/concert-card/concert-card'
import './concerts.css'

import ConcertData from '../components/concert-card/concert-data'
import SuperConcertCard from "../components/super-concert-card/SuperConcertCard"
import SuperCardImage from '../res/Trifecta.jpg'
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
                    <SuperConcertCard 
                    image={SuperCardImage}
                    nameA="Gene Watson" 
                    nameB="The Bellamy Brothers" 
                    nameC="David Frizzell"
                    date="Oct. 29"
                    time="6:00pm"
                    path="https://www.outhousetickets.com/Event/18324-COYOTE_SUPER_SHOW_-_Gene_Watson_The_Bellamy_Brothers_David_Frizzell/"
                    />
                </div>
            <Footer />
        </>
    )
}


export default Concerts;
import React from "react"
import NavBar from "../components/navbar/navbar"
import Footer from "../components/footer/Footer"
import ConcertCard from '../components/concert-card/concert-card'
import './concerts.css'

import ConcertData from '../components/concert-card/concert-data'

const Concerts = () => {

    return (
        <>
            <NavBar />
            <div className="concert-cards-container" id="top">
                {ConcertData.map((concert) => (
                    <ConcertCard image={concert.image} 
                    artistName={concert.artistName} 
                    date={concert.date} 
                    time={concert.time}
                    path={"https://" + concert.path}
                    facebookLink={concert.facebookLink}
                    />
                ))}
            </div>
            <Footer />
        </>
    )
}


export default Concerts;
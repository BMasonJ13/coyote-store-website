import React from "react"
import NavBar from "../components/navbar/navbar"
import Footer from "../components/footer/Footer"
import ConcertCard from '../components/concert-card/concert-card'
import './concerts.css'

import ConcertData from '../components/concert-card/concert-data'
import SuperConcertCard from "../components/super-concert-card/SuperConcertCard"
import SuperCardImage from '../res/Trifecta.jpg'

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
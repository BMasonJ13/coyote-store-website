import React from "react";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/Footer";
import ConcertCard from '../components/concert-card/concert-card'
import './concerts.css'
import RMImage from '../res/ronniemilsap.jpg'
import GPImage from '../res/garypnunn.jpg'
import TBImage from '../res/TracyByrd.jpg'

import SImage from '../res/Shenandoah.jpg'
import AATWImage from '../res/AATW.jpg'
import WBImage from '../res/WillBanister.jpg'

import RMcImage from '../res/RonnieMcDowell.jpg'
import JHImage from '../res/JakeHooker.jpg'

const Concerts = () => {

    return (
        <>
            <NavBar />
            <div className="concert-cards-container" id="top">
                <ConcertCard className="concert-card-container" 
                image={RMImage} 
                artistName="Ronnie Millsap" 
                date="Mar. 19th" 
                time="7:00pm"
                path="https://www.outhousetickets.com/Event/18550-Ronnie_Milsap"
                />
                <ConcertCard className="concert-card-container" 
                image={GPImage} 
                artistName="Gary P. Nunn" 
                date="Mar. 26th" 
                time="6:00pm"
                path="https://www.outhousetickets.com/Event/18061-Gary_P_Nunn_with_the_Kipp_Wilks_Band"
                />
                <ConcertCard className="concert-card-container" 
                image={TBImage} 
                artistName="Tracy Byrd" 
                date="Apr. 9th" 
                time="7:00pm" 
                path="https://www.outhousetickets.com/Event/18082-Tracy_Byrd"
                />
                <ConcertCard className="concert-card-container" 
                image={SImage} 
                artistName="Shenandoah" 
                date="May 14th" time="7:00pm"
                path="https://www.outhousetickets.com/Event/18323-Shenandoah_-_Playing_for_Veterans"
                />
                <ConcertCard className="concert-card-container" 
                image={AATWImage} 
                artistName="Asleep at the Wheel" 
                date="Jun. 17th" 
                time="7:00pm" 
                path="https://www.outhousetickets.com/Event/18320-Asleep_at_the_Wheel"
                />
                <ConcertCard className="concert-card-container" 
                image={WBImage} 
                artistName="Will Banister" 
                date="Jun. 18th" 
                time="8:00pm" 
                path="https://www.facebook.com/events/399335528411265/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D]%7D"
                facebookLink={true}
                />
                <ConcertCard className="concert-card-container" 
                image={RMcImage} 
                artistName="Ronnie McDowell" 
                date="Jul. 22cd" 
                time="7:00pm" 
                path="https://www.outhousetickets.com/Event/18325-Ronnie_McDowell"
                />
                <ConcertCard className="concert-card-container" 
                image={JHImage} 
                artistName="Jake Hooker" 
                date="Jul. 23rd" 
                time="8:00pm" 
                path="https://www.outhousetickets.com/Event/18547-Jake_Hooker_and_The_Outsiders"
                />
                <ConcertCard className="concert-card-container" 
                image={RMImage} 
                artistName="Gene Watson" 
                date="Oct. 29th" 
                time="6:00pm" 
                path="https://www.outhousetickets.com/Event/18324-COYOTE_SUPER_SHOW_-_Gene_Watson_The_Bellamy_Brothers_David_Frizzell"
                />
                <ConcertCard className="concert-card-container" 
                image={RMImage} 
                artistName="The Bellamy Brothers" 
                date="Oct. 29th" 
                time="6:00pm" 
                path="https://www.outhousetickets.com/Event/18324-COYOTE_SUPER_SHOW_-_Gene_Watson_The_Bellamy_Brothers_David_Frizzell"
                />
                <ConcertCard className="concert-card-container" 
                image={RMImage} 
                artistName="David Frizzell" 
                date="Oct. 29th" 
                time="6:00pm" 
                path="https://www.outhousetickets.com/Event/18324-COYOTE_SUPER_SHOW_-_Gene_Watson_The_Bellamy_Brothers_David_Frizzell"
                />
            </div>
            <Footer />
        </>
    )
}


export default Concerts;
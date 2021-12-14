
import React from 'react'
import NavBar from '../components/navbar/navbar'
import Banner from '../components/banner/banner'
import Footer from '../components/footer/Footer'
import HistoryCard from '../components/history-card/historycard'

import Pallettes from '../res/Pallettes.jpg'
import Test from '../res/AATW.jpg'

import './history.css'

const History = () => 
{

    return(
        <>
            <NavBar />
            <div className="history-tab-banner" >
                <Banner image={Pallettes} title="OUR LEGENDARY STORY" />
            </div>
            <div className="history-card-container">
                <HistoryCard image={Test} title="Test" details="Need help lets go. Need help lets go. Need help lets go. Need help lets go. Need help lets go. Need help lets go. Need help lets go. Need help lets go."/>
            </div>
            <Footer />
        </>
    )

}

export default History;
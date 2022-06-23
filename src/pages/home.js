import './home.css'
import Footer from '../components/footer/Footer';
import NavBar from '../components/navbar/navbar'
import ConcertCard from '../components/concert-card/concert-card';
import AATW from '../res/AATW.jpg'
import RMcImage from '../res/RonnieMcDowell.jpg'
import WBan from '../res/WillBanister.jpg'
import FlipClock from '../components/flip-clock/flipclock'
import ConcertData from '../components/concert-card/concert-data';

import styles from './Home.module.css'

function GetUpcoming() {

}

const Home = () => {

    return (
        <>
            <NavBar />
            <div className={styles.hero}>
                <h1 className={styles.text}>Will Banister</h1>
                <FlipClock className={styles.flip} date={new Date("06/03/2022 7:00 PM")} />
                <a className={styles.button} buttonColor={"red"} href={"www.outhousetickets.com/Event/m18992-Will_Banister/"}>GET TICKETS</a>
            </div>
            <div className="card-section">
                <h1>UPCOMING SHOWS</h1>
                <div className="card-section-container">

                    {ConcertData.map((data, index) => {
                        if (index >= 1 && index < 4)
                            return (
                                <div className="card-section-show">
                                    <ConcertCard
                                        image={data.image}
                                        artistName={data.artistName}
                                        date={data.date}
                                        time={data.time}
                                        path={data.path}
                                        facebookLink={data.facebookLink}
                                    />
                                </div>
                            )
                    })}
                </div>

            </div>
            <Footer />
        </>
    )

}


export default Home;
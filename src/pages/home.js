import './home.css'
import Footer from '../components/footer/Footer';
import NavBar from '../components/navbar/navbar'
import ConcertCard from '../components/concert-card/concert-card';
import AATW from '../res/AATW.jpg'
import RMcImage from '../res/RonnieMcDowell.jpg'
import WBan from '../res/WillBanister.jpg'
import FlipClock from '../components/flip-clock/flipclock'

import styles from './Home.module.css'

const Home = () => {

    return (
        <>
            <NavBar />
            <div className={styles.hero}>
                <h1 className={styles.text}>Shenandoah</h1>
                <FlipClock className={styles.flip} date={new Date("06/03/2022 7:00 PM")} />
                <a className={styles.button} buttonColor={"red"} href={"https://www.outhousetickets.com/Event/18323-Shenandoah_-_Playing_for_Veterans"}>GET TICKETS</a>
            </div>
            <div className="card-section">
                <h1>UPCOMING SHOWS</h1>
                <div className="card-section-container">
                    <div className="card-section-show">
                        <ConcertCard
                            image={AATW}
                            artistName="Asleep at the Wheel"
                            date="Jun. 17th"
                            time="7:00pm"
                            path="https://www.outhousetickets.com/Event/18320-Asleep_at_the_Wheel"
                        />
                    </div>
                    <div className="card-section-show">
                        <ConcertCard
                            image={WBan}
                            artistName="Will Banister"
                            date="Jun. 18th"
                            time="8:00pm"
                            path="https://www.outhousetickets.com/Event/m18992-Will_Banister/"
                        />
                    </div>
                    <div className="card-section-show">
                        <ConcertCard
                            image={RMcImage}
                            artistName="Ronnie McDowell"
                            date="Jul. 22cd"
                            time="7:00pm"
                            path="https://www.outhousetickets.com/Event/18325-Ronnie_McDowell"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}


export default Home;
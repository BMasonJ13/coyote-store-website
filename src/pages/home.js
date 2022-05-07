import './home.css'
import Footer from '../components/footer/Footer';
import NavBar from '../components/navbar/navbar'
import ConcertCard from '../components/concert-card/concert-card';
import AATW from '../res/AATW.jpg'
import SImage from '../res/Shenandoah.jpg'
import DiamondRio from '../res/DiamondRio.jpg'
import FlipClock from '../components/flip-clock/flipclock'

import styles from './Home.module.css'

const Home = () => {

    return (
        <>
            <NavBar />
            <div className={styles.hero}>
                <h1 className={styles.text}>Shenandoah</h1>
                <FlipClock className={styles.flip} date={new Date("05/14/2022 7:00 PM")} />
                <a className={styles.button} buttonColor={"red"} href={"https://www.outhousetickets.com/Event/18323-Shenandoah_-_Playing_for_Veterans"}>GET TICKETS</a>
            </div>
            <div className="card-section">
                <h1>UPCOMING SHOWS</h1>
                <div className="card-section-container">
                    <div className="card-section-show">
                        <ConcertCard
                            image={SImage}
                            artistName="Shenandoah"
                            date="May 14th"
                            time="7:00pm"
                            path="https://www.outhousetickets.com/Event/18323-Shenandoah_-_Playing_for_Veterans"
                        />
                    </div>
                    <div className="card-section-show">
                        <ConcertCard
                            image={DiamondRio}
                            artistName="Diamond Rio"
                            date="Jun. 3rd"
                            time="7:00pm"
                            path="https://www.outhousetickets.com/Event/19040-Diamond_Rio/"
                        />
                    </div>
                    <div className="card-section-show">
                        <ConcertCard
                            image={AATW}
                            artistName="Asleep at the Wheel"
                            date="Jun. 17th"
                            time="7:00pm"
                            path="https://www.outhousetickets.com/Event/18320-Asleep_at_the_Wheel"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}


export default Home;
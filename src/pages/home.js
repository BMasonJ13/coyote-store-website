import './home.css'
import Footer from '../components/footer/Footer';
import NavBar from '../components/navbar/navbar'
import ConcertCard from '../components/concert-card/concert-card';
import FlipClock from '../components/flip-clock/flipclock'
import ConcertData from '../components/concert-card/concert-data';

import styles from './Home.module.css'

const Home = () => {

    return (
        <>
            <NavBar />
            <div className={styles.hero}>
                <h1 className={styles.text}>Ronnie McDowell</h1>
                <FlipClock className={styles.flip} date={new Date("07/22/2022 7:00 PM")} />
                <a className={styles.button} buttonColor={"red"} href={"https://www.outhousetickets.com/Event/18325-Ronnie_McDowell"}>GET TICKETS</a>
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
                            else
                                return <></>
                    })}
                </div>

            </div>
            <Footer />
        </>
    )

}


export default Home;
import './home.css'
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/hero'
import NavBar from '../components/navbar/navbar'
import ConcertCard from '../components/concert-card/concert-card';
import TBImage from '../res/TracyByrd.jpg'
import SImage from '../res/Shenandoah.jpg'
import DiamondRio from '../res/DiamondRio.jpg'

const Home = () =>
{

    return(
        <>
            <NavBar />
            <Hero />
            <div className="card-section">
                <h1>UPCOMING SHOWS</h1>
                <div className="card-section-container">
                    <div className="card-section-show">
                        <ConcertCard 
                        image={TBImage}
                        artistName="Tracy Byrd" 
                        date="Apr. 9th" 
                        time="7:00pm" 
                        path="htpps://www.outhousetickets.com/Event/18082-Tracy_Byrd"
                        />
                    </div>
                    <div className="card-section-show">
                        <ConcertCard 
                        image={SImage} 
                        artistName="Shenandoah" 
                        date="May 14th" 
                        time="7:00pm" 
                        path="www.outhousetickets.com/Event/18323-Shenandoah_-_Playing_for_Veterans"
                        />
                    </div>
                    <div className="card-section-show">
                        <ConcertCard 
                        image={DiamondRio} 
                        artistName="Diamond Rio" 
                        date="Jun. 3rd"
                        time="7:00pm" 
                        path="www.outhousetickets.com/Event/19040-Diamond_Rio/"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}


export default Home;
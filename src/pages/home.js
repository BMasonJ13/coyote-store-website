import './home.css'
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/hero'
import NavBar from '../components/navbar/navbar'
import ConcertCard from '../components/concert-card/concert-card';
import RMImage from '../res/ronniemilsap.jpg'
import GPImage from '../res/garypnunn.jpg'
import TBImage from '../res/TracyByrd.jpg'

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
                        image={RMImage} 
                        artistName="Ronnie Millsap" 
                        date="Mar. 19th" 
                        time="7:00pm" 
                        path="https://www.outhousetickets.com/Event/18550-Ronnie_Milsap"
                        />
                    </div>
                    <div className="card-section-show">
                        <ConcertCard 
                        image={GPImage} 
                        artistName="Gary P. Nunn" 
                        date="Mar. 26th"
                        time="6:00pm" 
                        path="https://www.outhousetickets.com/Event/18061-Gary_P_Nunn_with_the_Kipp_Wilks_Band"
                        />
                    </div>
                    <div className="card-section-show">
                        <ConcertCard 
                        image={TBImage}
                        artistName="Tracy Byrd" 
                        date="Apr. 9th" 
                        time="7:00pm" 
                        path="htpps://www.outhousetickets.com/Event/18082-Tracy_Byrd"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}


export default Home;
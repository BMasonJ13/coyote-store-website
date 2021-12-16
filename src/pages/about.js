import React from "react";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/Footer"
import Banner from '../components/banner/banner'
import PImage from '../res/Pallettes.jpg'

import './about.css'

const About = () =>
{
    return(
        <>
            <NavBar />
            <Banner className="about-us-text" image={PImage} title="About Us"/>
            <div className="about-us-wrapper">
                <p className="about-us-paragraph">Established in 1985, The Coyote Store is a family owned and operated café situated in Gail, Borden County, Texas with a population of 631, making it the fifth-least populous county in Texas. Since 2017, the Coyote Store, has grown from a 32 seat café, to one of the premier country music venues of the Lone Star State, attracting thousands of visitors from across the nation each year.</p>
                <p className="about-us-paragraph">Dubbed as the place where tradition lives and the legends play, the Coyote Store is an 1,150 seat music venue that features the legends of country music,  as well as regional talent in a nostalgic atmosphere that carries its visitors back to another place in time. Purchased by our grandmother, Bertie in 1992 it has remained family owned and operated for over 30 years. This special cafe/local grocery store possesses a unique charm that keeps customers coming back for more. On occasion customers from as far as Denmark, have ventured to the middle of everywhere for not only a taste of one of our burgers, but for the old-fashioned, southern atmosphere that regulars hold dear. A few celebrities have made it a point to frequent The Coyote, whenever they get the chance.</p>
                <p className="about-us-paragraph">The Coyote Store schedules feature at least one national headliner concert per month on average, from March through October each year. Throughout the season, visitors can enjoy the famed Coyote Country Fish Fry Friday Nights with live music from the best in regional and local talent on its 150 seat store-front patio.</p>
                <p className="about-us-paragraph">The Coyote Store is located directly across the street from the Borden County Museum, which is open on concert days. Visitors are encouraged to stop by and learn more about the rich history of the place where tradition lives and the legends.</p>
                <a className="about-us-action" href="https://www.facebook.com/bordencounty" target="_blank" rel="noopener noreferrer">VISIT THE MUSEUM</a>
            </div>
            <Footer />
        </>
    )
}


export default About;

//Visit the Borden County Museum on Facebook at:  https://www.facebook.com/bordencounty. needs to be a button
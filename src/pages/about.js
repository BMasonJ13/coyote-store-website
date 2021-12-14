import React from "react";
import NavBar from "../components/navbar/navbar";
import Banner from "../components/banner/banner";

import Pallettes from '../res/Pallettes.jpg'

const About = () =>
{
    return(
        <>
            <NavBar />
            <Banner image={Pallettes} title="OUR LEGENDARY STORY"/>
        </>
    )
}


export default About;
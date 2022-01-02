
import React from 'react'
import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/Footer'
import SupporterCard from '../components/supporter-card/supportercard'
import SupporterData from '../components/supporter-card/supporterdata'
import './supporters.css'
import BannerImage from '../res/svg/BannerWithFire.svg'
import SVGBanner from '../components/svg-banner/SVGBanner'

const Supporters = () =>
{
//<h1>Our <span>Legendary</span> Supporters</h1>
    return(
        <>
            <NavBar />
            <div className="supporters-action-section">
                <SVGBanner 
                svg={BannerImage}
                title="JOIN THE COYOTE FAMILY"
                action="CONTACT"
                path="/Contact"
                />
            </div>
            <div className="supporters-card-section">
                {SupporterData.map((supporter) => (
                    <SupporterCard 
                    image={supporter.image}
                    name={supporter.name}
                    path={supporter.path}
                    />
                ))}
            </div>
            <Footer />
        </>
    )

}

export default Supporters

import React from 'react'
import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/Footer'
import SupporterCard from '../components/supporter-card/supportercard'
import SupporterData from '../components/supporter-card/supporterdata'
import './supporters.css'

const Supporters = () =>
{

    return(
        <>
            <NavBar />
            <div className="supporters-card-section">
                {SupporterData.map((supporter) => (
                    <SupporterCard 
                    image={supporter.image}
                    name={supporter.name}
                    />
                ))}
            </div>
            <Footer />
        </>
    )

}

export default Supporters
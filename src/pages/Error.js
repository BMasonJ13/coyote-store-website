
import React from "react";
import NavBar from "../components/navbar/navbar";
import Footer from '../components/footer/Footer'

import './Error.css'

const Error = () =>{

    return(
        <>
            <NavBar />
            <h1 className="error-text">404</h1>
            <h3 className="error-description">Whoops... Seems you found a broken link!</h3>
            <div className="error-footer">
            <Footer />
            </div>
        </>
    )

}

export default Error
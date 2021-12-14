
import React from "react";
import NavBar from "../components/navbar/navbar"
import Footer from "../components/footer/Footer"
import QuestionCard from "../components/question-card/questioncard";
import QuestionData from "../components/question-card/questiondata";
import './faq.css'

const FAQ = () =>
{

    return(
        <>
            <NavBar />
            <div className="question-card-section">
                {QuestionData.map((concert) => (
                    <QuestionCard 
                    questionText={concert.question} 
                    answerText={concert.answer}
                    />
                ))}
            </div>
            <Footer />
        </>
    )

}

export default FAQ;
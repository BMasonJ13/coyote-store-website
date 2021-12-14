import React from "react";
import './questioncard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from '@fortawesome/free-solid-svg-icons'

const QuestionCard = ({questionText, answerText}) =>
{

    return(

        <div className="question-card-container">
            <div className="question-card-question">
                <FontAwesomeIcon icon={Icons.faQuestionCircle} />
                <h3 className="question-text">{questionText}</h3>
            </div>
            <div className="question-card-answer">
                <FontAwesomeIcon icon={Icons.faComment} />
                <p className="answer-text">{answerText}</p>
            </div>
        </div>

    )

}

export default QuestionCard
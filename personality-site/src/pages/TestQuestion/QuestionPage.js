import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TestQuestion({questions, current}){
    console.log("Question Page.")
    // Current state
    const [question, setQuestion] = useState(0);
    const navigate = useNavigate();

    // Go to prev question
    const previous = () => {
        setQuestion(idx => Math.max(idx - 1, 0));
    }

    // Go to next question
    const next = () => {
        if (question == questions.length - 1){
            navigate('/result');
        } else {
            setQuestion(idx => Math.min(idx + 1, questions.length-1));
        }
    }

    const curr = questions[question];

    if (curr == null){
        console.log("No question")
        return null;
    } else {
        return (
            <div className="page">
                <img src={process.env.PUBLIC_URL + "/assets/background.jpg"} alt="Intro Page" className="page" style={{ height: '760px' }} />
                <div className="container">
                    <div className="titleText">
                        <h1>Question {curr + 1}</h1>
                        <div className="questionText">
                            <h4>{curr.question}</h4>
                        </div>
                    </div>
                    <div className="answerButtons">
                        {Object.entries(curr.responses).map(([key, value]) => (
                            <button key={key} type="button" onClick = {next} className={`answer${key}`}>
                                {value}
                            </button>
                        ))}
                    </div>
                    <div className="navigationButtons">
                        <button type="button" onClick={previous} disabled={question == 0}>
                            Previous
                        </button>
                        <button type="button" onClick={next} disabled={question == questions.length - 1}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TestQuestion;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function TestQuestion({questions, current}){
    console.log("Question Page.")
    // Current state
    const [question, setQuestion] = useState(0);
    const [answered, setAnswered] = useState(new Set());
    const navigate = useNavigate();

    // Go to prev question
    const previous = () => {
        setQuestion(idx => Math.max(idx - 1, 0));
    }

    // Go to next question
    const next = () => {
        /*
        if (question == questions.length - 1){
            navigate('/result');
        } else {
            setQuestion(idx => Math.min(idx + 1, questions.length-1));
        }*/
        setQuestion(Math.min(question + 1, questions.length - 1));
    }

    // Go to results once all questions are answered
    useEffect(() => {
        console.log('Answered: ' + answered.size)
        if (answered.size === questions.length) {
            navigate('/result');
        }
    }, [answered, navigate, questions]);

    const handleResponse = (responseKey) => {
        // Mark question as answered
        const currQuestion = question + 1;
        setAnswered(prevAnswered => new Set([...prevAnswered, currQuestion]));

        // Save response to server
        axios.post('/api/quiz', { questionNumber: currQuestion, response: responseKey })
            .then(response => {
                console.log('Response: ' + response.data.message);
                next();
            })
            .catch(error => {
                console.error('Unable to save result: ', error);
            });
    }

    const curr = questions[question];

    if (curr == null){
        console.log("No question available.")
        return null;
    } else {
        return (
            <div className="page">
                <div className="Qbackground">
                <div className="container">
                    <div className="QtitleText">
                        <h1>Question {question + 1}</h1>
                        <div className="questionText">
                            <h4>{curr.question}</h4>
                        </div>
                    </div>
                    <div className="answerButtons">
                        {Object.entries(curr.responses).map(([key, value]) => (
                            <button key={key} type="button" onClick={() => handleResponse(key)} className={`answer${key}`}>
                                {value}
                            </button>
                        ))}
                    </div>
                    <div className="navigationButtons">
                        <button type="button" className="buttonPrev" onClick={previous} disabled={question == 0}>
                            Previous
                        </button>
                        <button type="button" className="buttonNext" onClick={next} disabled={answered.has(question + 1) || question === questions.length - 1}>
                            Next
                        </button>
                    </div>
                </div></div>
            </div>
        )
    }
}

export default TestQuestion;

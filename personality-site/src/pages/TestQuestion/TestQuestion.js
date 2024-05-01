import React from 'react';

function TestQuestion({questions, current}){
    console.log("Question Page.")
    return(
        <div className="page">
            <img src={process.env.PUBLIC_URL + "/assets/background.jpg"} alt="Intro Page" className="page" style={{ height: '760px' }} />
            <div className="container">
                <div className="titleText">
                    <h1>Question 1</h1>
                    <div className="questionText">
                        <h4>The semester is winding to a close and you’re talking with your advisor to prepare for one of the most dreaded times of the year for college students: course selection.</h4>
                    </div>
                </div>
                {/* Replace below w link to results page */}
                <a href={process.env.PUBLIC_URL + "/assets/heart.jpg"}><button type="button" className="answer1">"It’s alright- I’m ready for this."</button></a>
                <a href={process.env.PUBLIC_URL + "/assets/brain.jpg"}><button type="button" className="answer2">"I’ll just take what my advisor tells me to."</button></a>
                <a href={process.env.PUBLIC_URL + "/assets/lungs.jpg"}><button type="button" className="answer3">"I have no idea what I’m gonna do."</button></a>
                <a href={process.env.PUBLIC_URL + "/assets/stomach.jpg"}><button type="button" className="answer4">"Course selection is happening when?"</button></a>
            </div>
        </div>
    )
}

export default TestQuestion;

import React from 'react';
import { Link } from 'react-router-dom';

function StartScreen(){
    console.log("Start Screen.")
    return(
        //<img src={process.env.PUBLIC_URL + "/images/aditi_au.jpg"} alt="Aditi Photo" style={{ width: '20%', height: 'auto', marginRight: '5%'}} />
        <div className="page">
                <div className="background">
                <div className="titleText">
                    <h1>ORGANALITY</h1>
                    <div className="subText">
                        <h2>Personality Quiz</h2>
                    </div>
                </div>
                <div>
                    <Link to="/test-question">
                        <button type="button" className="startButton">Take Test</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StartScreen;

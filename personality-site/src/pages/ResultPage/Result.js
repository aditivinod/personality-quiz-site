import React from 'react';
import { Link } from 'react-router-dom';

function Result(){
    console.log("Result Page.")
    return(
        <div> 
            <h3>Your Organality:</h3>
            <div className="resultImg"></div>
            <Link to="/">
                <button type="button" className="restartButton">Go to Start</button>
            </Link>
        </div>
    )
}

export default Result;                    
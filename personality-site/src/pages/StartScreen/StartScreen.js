import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function StartScreen(){
    console.log("Start Screen.");

    const [userID, setUserID] = useState(null);

    // Fetch user ID
    useEffect(() => {
        axios.post('/api/start-test')
            .then(response => {
                const { id } = response.data;
                if (id){
                    setUserID(id);
                }
            })
            .catch(error => {
                console.error('Error Starting Test: ', error);
            });
    }, []);

    return(
        <div className="page">
            <div className="background">
                <div className="titleText">
                    <h1>ORGANALITY</h1>
                    <div className="subText">
                        <h2>Personality Quiz</h2>
                    </div>
                </div>
                <Link to={`/test-question?userID=${userID}`}>
                    <button type="button" className="startButton">Take Test</button>
                </Link>
            </div>
        </div>
    )
}

export default StartScreen;

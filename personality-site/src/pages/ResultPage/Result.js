import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Result(){
    console.log("Result Page.")

    const [result, setResult] = useState(null);

    // Fetch results from backend
    useEffect(() => {
        axios.get('/api/result')
            .then(response => {
                setResult(response.data.result_class);
            })  
            .catch(error => {
                console.error('Error Fetching Result: ', error);
            });
    }, []); 

    // Determine css class based on result.
    const getResultClass = () => {
        console.log('result: '+ result)
        switch (result) {
            case 'brain':
                return 'brain';
            case 'heart':
                return 'heart';
            case 'lungs':
                return 'lungs';
            case 'stomach':
                return 'stomach';
            default:
                return '';
        }
    };


    return(
        <div> 
            <h3>Your Organality:</h3>
            {result && (
                <div className={`resultImg ${getResultClass()}`}></div>
            )}
            <Link to="/">
                <button type="button" className="restartButton">Go to Start</button>
            </Link>
        </div>
    )
}

export default Result;

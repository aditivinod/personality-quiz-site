import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function Result(){
    console.log("Result Page.")

    const [result, setResult] = useState(null);
    const [percentage, setPercentage] = useState(null);
    const location = useLocation();
    const userID = new URLSearchParams(location.search).get('userID');


    // Fetch results from backend
    useEffect(() => {
        axios.get(`/api/result?userID=${userID}`)
            .then(response => {
                setResult(response.data.result_class);
                setPercentage(response.data.percentage)
                console.log('Percentage: ' + percentage)
            })  
            .catch(error => {
                console.error('Error Fetching Result: ', error);
            });
    }, [userID, percentage]); 

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
                <div className={`resultImg ${getResultClass()}`}>
                    <p className='Percent'>{percentage}% of users are this Organality.</p>
                </div>
            )}
            <Link to="/">
                <button type="button" className="restartButton">Go to Start</button>
            </Link>
        </div>
    )
}

export default Result;

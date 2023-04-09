import React, { useEffect, useState } from 'react'

function PredictionBT() {
    const [prediction, setPrediction] = useState('');

    useEffect(() => {
        pred1();
    }, []);

    async function pred1() {
        const response = await fetch('http://localhost:8000/braintumor/predict', { method: 'POST' });
        const data = await response.json();
        console.log(data);

        setPrediction(data.prediction);
    }

    return (
        <div>
            <h1>PredictionBT</h1>
            <p>Prediction: {prediction}</p>
        </div>
    )
}

export default PredictionBT

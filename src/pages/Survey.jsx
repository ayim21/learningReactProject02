import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/Survey.css';

const Survey = () => {
    const {questionNumber} = useParams();
    const questionNumberInt = parseInt(questionNumber);
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : (questionNumberInt-1);
    const nextQuestionNumber = questionNumberInt+1;
    const [surveyData, setSurveyData] = useState({});
    const [isDataLoading, setDataLoading] = useState(false);
    

    useEffect(() => {
        setDataLoading(true);
        fetch('http://localhost:8000/survey')
            .then((res) => res.json())
            .then(({surveyData}) => {
                setSurveyData(surveyData)
                setDataLoading(false)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="survey-container">
            <h1 className="question-title">Question {questionNumber}</h1>
            {isDataLoading ? (<div className="loader"></div>) 
                : (<span className="question-content">{surveyData[questionNumber]}</span>)
            }
            
            <Link to={`/survey/${prevQuestionNumber}`}><p>Précédent</p></Link>
            {surveyData[questionNumberInt + 1] ? (<Link to={`/survey/${nextQuestionNumber}`}><p>Suivant</p></Link>)
            : (<Link to="/results">Résultats</Link>)}

        </div>
    );
};

export default Survey;

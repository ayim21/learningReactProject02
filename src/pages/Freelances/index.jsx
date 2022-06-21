import React from 'react';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/index';
import '../../styles/Freelances.css';

/*const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops'
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend'
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack'
    },
]*/

const Freelances = () => {
const [profileData, setProfileData] = useState([]);
const [isDataLoading, setDataLoading] = useState(false);

    useEffect(() => {
        setDataLoading(true);
        fetch('http://localhost:8000/freelances')
            .then(res => res.json())
            .then(profileData => {
                setProfileData(profileData.freelancersList)
                setDataLoading(false);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="profile-container">
            <h1 className="page-title">Freelances</h1>
            <h2 className="page-subtitle">Chez Shiny nous réunissons les meilleurs profils pour vous.</h2>
            {isDataLoading ? (<div className="loader"></div>) 
                : (
                    <div className="cards-container">
                    {profileData.map((profile) => (
                        <Card 
                            key={profile.id}
                            label={profile.job}
                            title={profile.name}
                        />
                    ))}
                    </div>                    
                )
            }
        </div>
    );
};

export default Freelances;
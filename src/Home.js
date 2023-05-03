import React from "react";
import { useState, useEffect} from 'react';
import SurfSpot from './SurfSpot'

const Home = () => {
const [spots, setSpots] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
fetch('http://localhost:3000/spots')
    .then(res => {
        if(!res.ok){
            throw Error('error fetching data!')
        }
        return res.json()
})
    .then((data) => {
        setSpots(data);
        setIsLoading(false);
        setError(null)
    })
    .catch(err => {
        setIsLoading(false)
        setError(err.message);
    })
}, []);

    return(
        <div className="home"> 
            { error && <div> {error} </div>}
            { isLoading && <div> Loading... </div>}
            {spots && <SurfSpot spots={spots} />}
        </div>
    )
}

export default Home;
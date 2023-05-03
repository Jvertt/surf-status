import React from "react";
import { useState, useEffect} from 'react';
import SurfSpot from './SurfSpot'

const Home = () => {
const [spots, setSpots] = useState(null);

const handleDelete = (id) => {
 const newSpots = spots.filter(spot => spot.id !== id);
 setSpots(newSpots)
}

useEffect(() => {
fetch('http://localhost:3000/spots')
    .then(res => {
        return res.json()
})
    .then((data) => {
        console.log(data);
        setSpots(data)
    });
}, [])

    return(
        <div className="home"> 
            {spots && <SurfSpot spots={spots} handleDelete={handleDelete} />}
        </div>
    )
}

export default Home;
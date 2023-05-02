import React from "react";
import { useState } from 'react';
import SurfSpot from './SurfSpot'

const Home = () => {
const [spots, setSpots] = useState([
    { title: 'Honolua bay', body: 'World famous surf spot', location: 'Maui,Hawaii', id: 1},
    { title: 'Breakwall', body: 'Famous beginner surf spot', location: 'Maui,Hawaii', id: 2},
    { title: 'Jaws', body: 'Biggest waves in the world', location: 'Maui,Hawaii', id: 3}
]);

const handleDelete = (id) => {
 const newSpots = spots.filter(spot => spot.id !== id);
 setSpots(newSpots)
}

    return(
        <div className="home"> 
            <SurfSpot spots={spots} handleDelete={handleDelete} />
        </div>
    )
}

export default Home;
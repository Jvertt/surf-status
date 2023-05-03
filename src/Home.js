import React from "react";
import { useState, useEffect} from 'react';
import SurfSpot from './SurfSpot'
import useFetch from "./useFetch";

const Home = () => {
const { data: spots, isLoading, error} = useFetch('http://localhost:3000/spots')



    return(
        <div className="home"> 
            { error && <div> {error} </div>}
            { isLoading && <div> Loading... </div>}
            {spots && <SurfSpot spots={spots} />}
        </div>
    )
}

export default Home;
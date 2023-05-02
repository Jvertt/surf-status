import React from 'react'

const SurfSpot = (props) => {
const spots = props.spots
    return (
        <div className="surf-spot"> 
            {spots.map((spot) => (
                <div className="spot-preview" key={spot.id}>
                    <h2>{ spot.title }</h2>
                    <p> Location { spot.location }</p>
                </div>
            ))}
        </div>
    );
}
 
export default SurfSpot;
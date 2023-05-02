import React from 'react'

const SurfSpot = (props) => {
    //console.log(props)
const spots = props
console.log(spots)

const spottest = spots.map((spot) => (console.log(spot))
    // <div className="spot" key={spot.id}>
    //     <h2>{ spot.title }</h2>
    //     <p> Location { spot.location }</p>
    // </div>
)
    return (
        <div className="surf-spot"> 
            {spottest}
        </div>
    );
}
 
export default SurfSpot;
import {Link} from "react-router-dom"

const SurfSpot = ({spots}) => {

    return (
        <div className="surf-spot"> 
        
            {spots.map((spot) => (<div className="spot" key={spot.id}>
                <Link to={`/spots/${spot.id}`}>
                    <h2>{ spot.title }</h2>
                    <p> Location { spot.location }</p>
                </Link>
            </div>))}
        </div>
    );

    }
export default SurfSpot;
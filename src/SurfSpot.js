
const SurfSpot = ({spots, handleDelete}) => {

    return (
        <div className="surf-spot"> 
            {spots.map((spot) => (<div className="spot" key={spot.id}>
            <h2>{ spot.title }</h2>
            <p> Location { spot.location }</p>
            <button onClick={() => handleDelete(spot.id)}> delete spot</button>
            </div>))}
        </div>
    );

    }
export default SurfSpot;
import { useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";

const SurfDetails = () => {
    const { id } = useParams();
    const { data: spot, error, isLoading} = useFetch('http://localhost:3000/spots/' + id)
    return ( 
        <div className="surf-details">
           {isLoading && <div> Loading...</div>}
           {error && <div> {error}</div>}
           {spot && (
            <article>
                <h2> {spot.title}</h2>
                <p> Location {spot.location}</p>
                <div>{spot.body}</div>
            </article>
           )}
        </div>
     );
}
 
export default SurfDetails;
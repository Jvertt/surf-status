import { useParams, useHistory} from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";

const SurfDetails = ({handleDelete}) => {
    const { id } = useParams();
    const { data: spot, error, isLoading} = useFetch('http://localhost:3000/spots/' + id)
    const redirect = useHistory();

    const handleClick= () => {
        fetch('http://localhost:3000/spots/' + spot.id, {
            method: 'DELETE'
        }).then(() => {
            redirect.push('/');
        })
        handleDelete()
    }
    return ( 
        <div className="surf-details">
           {isLoading && <div> Loading...</div>}
           {error && <div> {error}</div>}
           {spot && (
            <article>
                <h2> {spot.title}</h2>
                <p> Location {spot.location}</p>
                <div>{spot.body}</div>
                <button onClick={handleClick}> delete </button>
            </article>
           )}
        </div>
     );
}
 
export default SurfDetails;
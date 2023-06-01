import { useParams, useHistory } from "react-router-dom";

const SurfDetails = ({ handleDelete, data }) => {
  const { id } = useParams();
  const spot = data?.find((spot) => spot.id === Number(id));
  const history = useHistory();

  const handleClick = () => {
    fetch(`http://localhost:3000/spots/${spot.id}`, {
      method: "DELETE",
    })
      .then(() => handleDelete(spot.id))
      .then(() => history.push("/"));
  };

  return (
    <div className="surf-details">
        <article>
          <h2>{spot.title}</h2>
          <p>Location: {spot.location}</p>
          <div>{spot.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
    </div>
  );
};

export default SurfDetails;

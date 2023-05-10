import { useParams, useHistory } from "react-router-dom";

const SurfDetails = ({ handleDelete, data }) => {
  const { id } = useParams();
  const spot = data?.find((spot) => spot.id === Number(id));
  const redirect = useHistory();

  const handleClick = ({}) => {
    fetch("http://localhost:3000/spots/" + spot.id, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDelete(spot.id));
    redirect.push("/");
  };
  return (
    <div className="surf-details">
      {spot ? (
        <article>
          <h2> {spot.title}</h2>
          <p> Location {spot.location}</p>
          <div>{spot.body}</div>
          <button onClick={handleClick}> delete </button>
        </article>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SurfDetails;


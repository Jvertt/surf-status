import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewSpot = ({ handleAdd }) => {
  const [spot, setSpot] = useState({
    title: "",
    image: "",
    body: "",
    location: ""
  });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/spots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(spot)
    })
      .then((r) => r.json())
      .then((newObj) => {
        handleAdd(newObj);
        history.push("/");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSpot((prevSpot) => ({
      ...prevSpot,
      [name]: value
    }));
  };

  return (
    <div className="new-spot">
      <h2>Add a new spot!</h2>
      <form onSubmit={handleSubmit}>
        <label>Surf Spot</label>
        <input
          type="text"
          required
          name="title"
          value={spot.title}
          onChange={handleChange}
        />
        <label>Image</label>
        <input
          required
          name="image"
          value={spot.image}
          onChange={handleChange}
        ></input>
        <label>Surf body</label>
        <input
          required
          name="body"
          value={spot.body}
          onChange={handleChange}
        ></input>
        <label>Location</label>
        <input
          required
          name="location"
          value={spot.location}
          onChange={handleChange}
        ></input>
        <button>add spot</button>
      </form>
    </div>
  );
};

export default NewSpot;

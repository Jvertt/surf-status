import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import Home from "./Home";
import NavBar from "./NavBar";
import SurfSpot from "./SurfSpot";
import Gallery from "./Gallery";
import NewSpot from "./NewSpot";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SurfDetails from "./SurfDetails";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/spots")
      .then((res) => res.json())
      .then((spots) => setData(spots));
  }, []);

  const handleAdd = (object) => {
    setData([...data, object]);
  };
  const handleDelete = (id) => {
    const filtered = data.filter((spot) => spot.id != id);
    setData(filtered);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home data={data} />
            </Route>
            <Route path="/Gallery">
              <Gallery data={data} />
            </Route>
            <Route path="/NewSpot">
              <NewSpot handleAdd={handleAdd} />
            </Route>
            <Route path="/spots/:id">
              <SurfDetails handleDelete={handleDelete} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
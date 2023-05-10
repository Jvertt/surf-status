import React, { useState, useEffect } from "react";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/spots")
      .then(response => response.json())
      .then(spots => {
        setData(spots);
        setIsLoading(false);
      });
  }, []);

  const handleAdd = (object) => {
    setData([...data, object]);
  };

  const handleDelete = (id) => {
    const filtered = data.filter((spot) => spot.id !== id);
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
              <SurfDetails handleDelete={handleDelete} data={data} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

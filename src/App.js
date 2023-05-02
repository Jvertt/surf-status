import React from "react";
import "./index.css";
import Home from "./Home"
import NavBar from "./NavBar"
import SurfSpot from "./SurfSpot";
import NewSpot from "./NewSpot";


function App() {
  const title="Welcome to Surf Status"
  return (
    <div className="App">
      <NavBar/>
      <NewSpot/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );  
}

export default App;
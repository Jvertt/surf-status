import React from "react"
// import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <nav className="navbar">
        <h1>Surf Status</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/surfSpot">Surf Spot</a>
          <a href="/newSpot" style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px"
          }}>New Spot</a>
        </div>
      </nav>
    )
}

export default NavBar;

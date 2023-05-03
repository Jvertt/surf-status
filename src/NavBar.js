import React from "react"
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav className="navbar">
        <h1>Surf Status</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/SurfSpot">Surf Spot</Link>
          <Link to="/NewSpot">New Spot</Link>
        </div>
      </nav>
    )
}

export default NavBar;

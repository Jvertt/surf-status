import React from "react";
import "./index.css";
import Home from "./Home"
import NavBar from "./NavBar"
import SurfSpot from "./SurfSpot";
import Gallery from "./Gallery";
import NewSpot from "./NewSpot";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SurfDetails from "./SurfDetails";


function App() {
  const title="Welcome to Surf Status"
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Gallery">
              <Gallery />
            </Route>
            <Route path="/NewSpot">
              <NewSpot />
            </Route>
            <Route path="/spots/:id">
              <SurfDetails />
            </Route>
          </Switch>
       </div>
      </div>
    </Router>
    
  );  
}

export default App;

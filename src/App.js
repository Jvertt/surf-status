import React from "react";
import "./index.css";
import Home from "./Home"
import NavBar from "./NavBar"
import SurfSpot from "./SurfSpot";
import NewSpot from "./NewSpot";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  const title="Welcome to Surf Status"
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <NewSpot/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/NewSpot">
              <NewSpot />
            </Route>
          </Switch>
       </div>
      </div>
    </Router>
    
  );  
}

export default App;
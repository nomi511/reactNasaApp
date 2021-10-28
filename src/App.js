import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home.js"
import Navbar from "./components/Navbar.js"
import Footer from "./components/Footer.js"
import Pod from "./components/Pod.js"
import Rover from "./components/Rover"
import Events from "./components/Events.js"

import "./index.css";






function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="pageBody">

          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/pod">
              <Pod />
            </Route>

            <Route path="/rover">
              <Rover />
            </Route>

            <Route path="/events">
              <Events  />
            </Route>

          </Switch>

        </div>

        <Footer />
      </div>

    </Router>
  );
}

export default App;

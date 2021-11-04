import React from "react";
import { Menu } from "./components/menu/Menu.jsx";
import { Chef } from "./pages/Chef.jsx";
import {Summary} from "./components/menu/summary/Summary.jsx"
import { LandingPage } from "./pages/LandingPage.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/menu" component={Menu}></Route>
        <Route exact path="/statusProducts" component={Chef}></Route>
        <Route exact path="/summary" component={Summary}></Route>
      </Switch>
    </Router>
  );
}

export default App;

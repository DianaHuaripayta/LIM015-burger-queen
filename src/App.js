import React from "react";
import { Menu } from "./components/menu/Menu.jsx";
import { Login } from "./components/login/Login.jsx";
import {Summary} from "./components/menu/summary/Summary.jsx"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/menu" component={Menu}></Route>
        <Route exact path="/summary" component={Summary}></Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import { Menu } from "./components/menu/Menu.jsx";
import { Login } from "./components/login/Login.jsx";
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
       
      </Switch>
    </Router>
  );
}

export default App;

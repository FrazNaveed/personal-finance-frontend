import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Expenses from "./pages/Expenses/Expenses";
import Auth from "./pages/Authentication/Auth";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/Dashboard">
            <Sidebar />
            <Expenses />
          </Route>
        </Switch>

        <Switch>
          <Route path="/Settings">
            <Sidebar />
          </Route>
        </Switch>

        <Switch>
          <Route path="/Login">
            <Auth />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

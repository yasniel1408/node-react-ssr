import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";

function Main() {
  return (
    <Router>
      <main>
        <Switch>
          <Redirect from="/" to="/dashboard" component={List} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </main>
    </Router>
  );
}

export default Main;

ReactDOM.render(<Main />, document.getElementById("component-main"));

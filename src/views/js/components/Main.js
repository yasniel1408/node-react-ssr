import React from "react";
import ReactDOM from "react-dom";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import { Ecomerce } from "../pages/ecomerce/Ecomerce";

function Main() {
  return (
    <Router>
      <main>
        {/* <Nav /> */}
        <Switch>
          <Redirect from="/" to="/ecomerce" component={List} />
          <Route path="/ecomerce" exact component={Ecomerce} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </main>
    </Router>
  );
}

export default Main;

ReactDOM.render(<Main />, document.getElementById("component-main"));

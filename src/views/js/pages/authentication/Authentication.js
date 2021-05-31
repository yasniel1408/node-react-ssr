import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";

const Authentication = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </main>
    </Router>
  );
};

ReactDOM.render(
  <Authentication />,
  document.getElementById("component-authentication")
);

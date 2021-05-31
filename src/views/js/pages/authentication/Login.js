import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      Login
      <br />
      <a href="/"> dashboard </a>
      <br/>
      <Link to="/register">Register</Link>
    </div>
  );
};

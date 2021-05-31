import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div>
      Register
      <br />
      <a href="/"> dashboard </a>
      <br />
      <Link to="/login">Login</Link>
    </div>
  );
};

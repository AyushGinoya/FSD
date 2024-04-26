import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/holi">Bollywood</Link>
      <Link to="/boli">Hollywood</Link>
    </nav>
  );
}

export default Navigation;

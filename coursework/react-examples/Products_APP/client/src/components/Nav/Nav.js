import React from "react";
import "./Nav.css";
import {Link} from "react-router-dom";
const Nav = () => (
  <nav className="navbar navbar-dark bg-dark">
    <Link className="navbar-brand" to="/all">ALL PRODUCTS</Link>
    <Link className="navbar-brand" to="/new">ADD PRODUCTS</Link>
  </nav>
);

export default Nav;

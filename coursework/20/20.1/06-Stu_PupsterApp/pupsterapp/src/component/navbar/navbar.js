import React from "react";

const Navbar = () => {

    return (
        <div className="navbar">
        <a className="navbar-brand">Title</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a>Home</a>
          </li>
          <li>
            <a>Link</a>
          </li>
        </ul>
      </div>
    )
}

export default Navbar
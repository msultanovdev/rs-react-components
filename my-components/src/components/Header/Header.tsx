import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation().pathname;
  return (
    <header className="header">
      <nav>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="about">
          About
        </Link>
        <Link className="nav-link" to="form-page">
          Form
        </Link>
      </nav>
      <p className="header-path">{location.slice(1, location.length)}</p>
    </header>
  );
};

export default Header;

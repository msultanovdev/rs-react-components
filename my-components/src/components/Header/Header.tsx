import React from "react";
import { Link, NavigateFunction } from "react-router-dom";
import "./Header.css";

class Header extends React.Component<{
  navigate: NavigateFunction;
  location: string;
}> {
  render(): React.ReactNode {
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
        <p className="header-path">
          {this.props.location.slice(1, this.props.location.length)}
        </p>
      </header>
    );
  }
}

export default Header;

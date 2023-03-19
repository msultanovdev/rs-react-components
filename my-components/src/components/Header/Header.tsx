import React from "react";
import { Link, NavigateFunction } from "react-router-dom";
import './Header.css';
import { AppType, LocationType, NavigateType } from "../../types";

class Header extends React.Component<any> {
    render(): React.ReactNode {
        return(
            <header className="header">
                <nav>
                    <Link className="nav-link" to="home">Home</Link>
                    <Link className="nav-link" to="about">About</Link>
                </nav>
                <p className="header-path">{this.props.location.slice(1, this.props.location.length)}</p>
            </header>
        );
    }
}

export default Header;
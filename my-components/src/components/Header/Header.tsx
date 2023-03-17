import React from "react";
import { Link, NavigateFunction } from "react-router-dom";

class Header extends React.Component<{ navigate: NavigateFunction; }> {
    render(): React.ReactNode {
        return(
            <header>
                <Link to="home">Home</Link>
                <Link to="about">About</Link>
            </header>
        );
    }
}

export default Header;
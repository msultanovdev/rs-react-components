import React from "react";
import "./About.css";

class About extends React.Component {
  render(): React.ReactNode {
    return (
      <div data-testid="about" className="about">
        <h1 data-testid="about-title">About Page</h1>
      </div>
    );
  }
}

export default About;

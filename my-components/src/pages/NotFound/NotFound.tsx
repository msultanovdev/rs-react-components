import React from "react";
import "./NotFound.css";

class NotFound extends React.Component {
  render(): React.ReactNode {
    return (
      <div data-testid="not-found" className="notfound">
        <h1>Not Found Page (404 Error)</h1>
      </div>
    );
  }
}

export default NotFound;

import React from "react";
import "./FormCard.css";
import { cardProps } from "../../types";

class FormCard extends React.Component<cardProps> {
  render(): React.ReactNode {
    return (
      <div className="form-card">
        <div>
          <p>Name: {this.props.name}</p>
          <p>Birthday: {this.props.date}</p>
          <p>Sex: {this.props.chooseSelection}</p>
          <p>Favourite Car: {this.props.car}</p>
          <p>File path: {this.props.file}</p>
        </div>
      </div>
    );
  }
}

export default FormCard;

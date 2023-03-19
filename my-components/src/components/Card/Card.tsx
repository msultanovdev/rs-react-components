import React from "react";
import "./Card.css";
import { CardType } from "../../types";

class Card extends React.Component<CardType> {
  render(): React.ReactNode {
    return (
      <div data-testid="card" className="card">
        <h1 data-testid="card-title">{this.props.title}</h1>
        <div className="card-content">
          <img
            data-testid="card-image"
            src={this.props.img}
            alt="card"
            className="card-image"
          />
          <p
            data-testid="card-description"
            className="card-content-description"
          >
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}

export default Card;

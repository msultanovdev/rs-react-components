import React from "react";
import './Card.css';
import { CardType } from "../../types";

class Card extends React.Component<CardType> {
    render(): React.ReactNode {
        return(
            <div className="card">
                <h1>{this.props.title}</h1>
                <div className="card-content">
                    <img src={this.props.img} alt="card" className="card-image" />
                    <p className="card-content-description">{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default Card;
import "./Card.css";
import { CardType } from "../../types";

const Card = ({ title, img, description }: CardType) => {
  return (
    <div data-testid="card" className="card">
      <h1 data-testid="card-title">{title}</h1>
      <div className="card-content">
        <img
          data-testid="card-image"
          src={img}
          alt="card"
          className="card-image"
        />
        <p data-testid="card-description" className="card-content-description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;

import "./Card.css";
import { IResType } from "../../types";

const Card = ({ name, image, species }: IResType) => {
  return (
    <div data-testid="card" className="card">
      <h1 data-testid="card-title">{name}</h1>
      <div className="card-content">
        <img
          data-testid="card-image"
          src={image}
          alt="card"
          className="card-image"
        />
        <p data-testid="card-description" className="card-content-description">
          {species}
        </p>
      </div>
    </div>
  );
};

export default Card;

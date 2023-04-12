import "./FormCard.css";
import { cardProps } from "../../types";

const FormCard = ({ name, date, chooseSelection, car, file }: cardProps) => {
  return (
    <div className="form-card">
      <div>
        <p>Name: {name}</p>
        <p>Birthday: {date}</p>
        <p>Sex: {chooseSelection}</p>
        <p>Favourite Car: {car}</p>
        <img
          src={URL.createObjectURL(file)}
          alt="form-card"
          className="form-card-image"
        />
      </div>
    </div>
  );
};

export default FormCard;

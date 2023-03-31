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
        <p>File path: {file}</p>
      </div>
    </div>
  );
};

export default FormCard;

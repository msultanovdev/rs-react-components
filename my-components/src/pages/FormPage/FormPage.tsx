import { useState } from "react";
import "./FormPage.css";
import FormCard from "../../components/FormCard/FormCard";
import { ICardForm, cardProps } from "../../types";
import { FieldValues, useForm } from "react-hook-form";

const FormPage = () => {
  const [items, setItems] = useState<cardProps[]>([]);
  const [isValidName, setIsValidName] = useState(false);
  const [isValidDate, setIsValidDate] = useState(false);
  const [isValidCar, setIsValidCar] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const [isMale, setIsMale] = useState(false);
  const [isFile, setIsFile] = useState(false);

  const { register, handleSubmit, getValues, reset } = useForm<ICardForm>();

  function onSubmit(data: FieldValues) {
    if (!getValues("name")) {
      setIsValidName(true);
    } else {
      setIsValidName(false);
    }
    if (!getValues("checkbox")) {
      setIsAgree(true);
    } else {
      setIsAgree(false);
    }
    if (!getValues("chooseSelection")) {
      setIsValidCar(true);
    } else {
      setIsValidCar(false);
    }
    if (!getValues("file")) {
      setIsFile(true);
    } else {
      setIsFile(false);
    }
    if (!getValues("switcher")) {
      setIsMale(true);
    } else {
      setIsMale(false);
    }
    if (!getValues("date")) {
      setIsValidDate(true);
    } else {
      setIsValidDate(false);
    }

    if (
      getValues("name") &&
      getValues("checkbox") &&
      getValues("chooseSelection") &&
      getValues("date") &&
      getValues("switcher") &&
      getValues("file")
    ) {
      const obj = {
        name: data.name,
        date: data.date,
        car: data.car,
        chooseSelection: data.chooseSelection,
        file: data.file[0],
      };

      setItems([...items, obj]);
      reset();
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <input
              {...register("name")}
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />
            <p className="input-invalid">
              {isValidName ? "Invalid Name, please use letters!" : ""}
            </p>
          </div>

          <div className="input-wrapper">
            <input
              {...register("date")}
              name="date"
              type="date"
              className="input"
              placeholder="Input"
            />
            <p className="input-invalid">
              {isValidDate ? "Invalid Date, please use calendar!" : ""}
            </p>
          </div>

          <div className="input-wrapper">
            <div className="select-wrapper">
              <p>Your favourite car mark: </p>
              <select
                defaultValue="Merc"
                {...register("chooseSelection")}
                name="car"
              >
                <option value="Merc">Mercedes</option>
                <option value="BMW">BMW</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Porche">Porche</option>
              </select>
            </div>
            <p className="input-invalid">
              {isValidCar ? "Please, choose one car!" : ""}
            </p>
          </div>

          <div className="input-wrapper">
            <div className="select-wrapper">
              <p>Do you agree?: </p>
              <input
                type="checkbox"
                {...register("checkbox")}
                name="checkbox"
              />
            </div>
            <p className="input-invalid">
              {isAgree ? "Check the checkbox" : ""}
            </p>
          </div>

          <div className="input-wrapper">
            <label>
              <input type="radio" {...register("switcher")} />
              Male
            </label>
            <label>
              <input type="radio" {...register("switcher")} />
              Female
            </label>
            <p className="input-invalid">{isMale ? "Check your sex" : ""}</p>
          </div>

          <div className="input-wrapper">
            <input type="file" {...register("file")} name="file" />
            <p className="input-invalid">
              {isFile ? "Please, choose file" : ""}
            </p>
          </div>

          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
      <div className="cards">
        {items.length
          ? items.map((item: cardProps, index) => (
              <FormCard
                key={index}
                name={item.name}
                date={item.date}
                car={item.car}
                chooseSelection={item.chooseSelection}
                file={item.file}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default FormPage;

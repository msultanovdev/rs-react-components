import React, { useRef, useState } from "react";
import "./FormPage.css";
import FormCard from "../../components/FormCard/FormCard";
import { cardProps } from "../../types";

const FormPage = () => {
  const [items, setItems] = useState<cardProps[]>([]);
  const [isValidName, setIsValidName] = useState(false);
  const [isValidDate, setIsValidDate] = useState(false);
  const [isValidCar, setIsValidCar] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const [isMale, setIsMale] = useState(false);
  const [isFile, setIsFile] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const birthdayRef = useRef<HTMLInputElement>(null);
  const favCarRef = useRef<HTMLSelectElement>(null);
  const checkAgreeRef = useRef<HTMLInputElement>(null);
  const maleRef = useRef<HTMLInputElement>(null);
  const femaleRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const submitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if ((nameInputRef.current as HTMLInputElement).value.length < 3) {
      setIsValidName(true);
    } else {
      setIsValidName(false);
    }

    if (!(birthdayRef.current as HTMLInputElement).value) {
      setIsValidDate(true);
    } else {
      setIsValidDate(false);
    }

    if (!(favCarRef.current as HTMLSelectElement).value) {
      setIsValidCar(true);
    } else {
      setIsValidCar(false);
    }

    if (!(checkAgreeRef.current as HTMLInputElement).checked) {
      setIsAgree(true);
    } else {
      setIsAgree(false);
    }

    if (
      !(maleRef.current as HTMLInputElement).checked &&
      !(femaleRef.current as HTMLInputElement).checked
    ) {
      setIsMale(true);
    } else {
      setIsMale(false);
    }

    if (!(fileRef.current as HTMLInputElement).value) {
      setIsFile(true);
    } else {
      setIsFile(false);
    }

    if (
      (nameInputRef.current as HTMLInputElement).value.length >= 3 &&
      (birthdayRef.current as HTMLInputElement).value &&
      (checkAgreeRef.current as HTMLInputElement).checked &&
      (fileRef.current as HTMLInputElement).value &&
      ((maleRef.current as HTMLInputElement).checked ||
        (femaleRef.current as HTMLInputElement).checked) &&
      (favCarRef.current as HTMLSelectElement).value
    ) {
      const obj = {
        name: (nameInputRef.current as HTMLInputElement).value,
        date: (birthdayRef.current as HTMLInputElement).value,
        car: (favCarRef.current as HTMLSelectElement).value,
        chooseSelection: (maleRef.current as HTMLInputElement).checked
          ? "Male"
          : "Female",
        file: fileRef.current!.files![0],
      };

      const newItems: cardProps[] = items;
      newItems.push(obj);
      setItems(newItems);

      setIsValidName(true);
      setIsValidDate(true);
      setIsValidCar(true);
      setIsAgree(true);
      setIsMale(true);
      setIsFile(true);

      (nameInputRef.current as HTMLInputElement).value = "";
      (birthdayRef.current as HTMLInputElement).value = "";
      (favCarRef.current as HTMLSelectElement).value = "";
      (femaleRef.current as HTMLInputElement).value = "";
      (fileRef.current as HTMLInputElement).value = "";
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form action="" className="form">
          <div className="input-wrapper">
            <input
              ref={nameInputRef}
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
              ref={birthdayRef}
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
              <select defaultValue="Merc" ref={favCarRef}>
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
              <input type="checkbox" ref={checkAgreeRef} />
            </div>
            <p className="input-invalid">
              {isAgree ? "Check the checkbox" : ""}
            </p>
          </div>

          <div className="input-wrapper">
            <label>
              <input type="radio" name="isMan" ref={maleRef} />
              Male
            </label>
            <label>
              <input type="radio" name="isMan" ref={femaleRef} />
              Female
            </label>
            <p className="input-invalid">{isMale ? "Check your sex" : ""}</p>
          </div>

          <div className="input-wrapper">
            <input type="file" ref={fileRef} />
            <p className="input-invalid">
              {isFile ? "Please, choose file" : ""}
            </p>
          </div>

          <button
            onClick={(e) => submitButton(e)}
            type="submit"
            className="submitBtn"
          >
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

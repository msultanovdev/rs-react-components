import React from "react";
import "./FormPage.css";
import FormCard from "../../components/FormCard/FormCard";
import { cardProps } from "../../types";

class FormPage extends React.Component {
  items: cardProps[] = [];
  state = {
    isValidName: false,
    isValidDate: false,
    isValidCar: false,
    isAgree: false,
    isMale: false,
    isFile: false,
    items: this.items,
  };

  nameInputRef: React.RefObject<HTMLInputElement>;
  birthdayRef: React.RefObject<HTMLInputElement>;
  favCarRef: React.RefObject<HTMLSelectElement>;
  checkAgreeRef: React.RefObject<HTMLInputElement>;
  maleRef: React.RefObject<HTMLInputElement>;
  femaleRef: React.RefObject<HTMLInputElement>;
  fileRef: React.RefObject<HTMLInputElement>;

  componentDidMount(): void {
    console.log(this.state);
  }

  constructor(props: never) {
    super(props);
    this.nameInputRef = React.createRef<HTMLInputElement>();
    this.birthdayRef = React.createRef<HTMLInputElement>();
    this.favCarRef = React.createRef<HTMLSelectElement>();
    this.checkAgreeRef = React.createRef<HTMLInputElement>();
    this.maleRef = React.createRef<HTMLInputElement>();
    this.femaleRef = React.createRef<HTMLInputElement>();
    this.fileRef = React.createRef<HTMLInputElement>();
  }

  submitButton(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if ((this.nameInputRef.current as HTMLInputElement).value.length < 3) {
      this.setState({ isValidName: true });
    } else {
      this.setState({ isValidName: false });
    }

    if (!(this.birthdayRef.current as HTMLInputElement).value) {
      this.setState({ isValidDate: true });
    } else {
      this.setState({ isValidDate: false });
    }

    if (!(this.favCarRef.current as HTMLSelectElement).value) {
      this.setState({ isValidCar: true });
    } else {
      this.setState({ isValidCar: false });
    }

    if (!(this.checkAgreeRef.current as HTMLInputElement).checked) {
      this.setState({ isAgree: true });
    } else {
      this.setState({ isAgree: false });
    }

    if (
      !(this.maleRef.current as HTMLInputElement).checked &&
      !(this.femaleRef.current as HTMLInputElement).checked
    ) {
      this.setState({ isMale: true });
    } else {
      this.setState({ isMale: false });
    }

    if (!(this.fileRef.current as HTMLInputElement).value) {
      this.setState({ isFile: true });
    } else {
      this.setState({ isFile: false });
    }

    if (
      (this.nameInputRef.current as HTMLInputElement).value.length >= 3 &&
      (this.birthdayRef.current as HTMLInputElement).value &&
      (this.checkAgreeRef.current as HTMLInputElement).checked &&
      (this.fileRef.current as HTMLInputElement).value &&
      ((this.maleRef.current as HTMLInputElement).checked ||
        (this.femaleRef.current as HTMLInputElement).checked) &&
      (this.favCarRef.current as HTMLSelectElement).value
    ) {
      const obj = {
        name: (this.nameInputRef.current as HTMLInputElement).value,
        date: (this.birthdayRef.current as HTMLInputElement).value,
        car: (this.favCarRef.current as HTMLSelectElement).value,
        chooseSelection: (this.maleRef.current as HTMLInputElement).checked
          ? "Male"
          : "Female",
        file: (this.fileRef.current as HTMLInputElement).value,
      };

      this.state.items.push(obj);
      const newItems: cardProps[] = this.state.items;
      this.setState({ items: newItems });

      this.setState({
        isValidName: true,
        isValidDate: true,
        isValidCar: true,
        isAgree: true,
        isMale: true,
        isFile: true,
      });

      (this.nameInputRef.current as HTMLInputElement).value = "";
      (this.birthdayRef.current as HTMLInputElement).value = "";
      (this.favCarRef.current as HTMLSelectElement).value = "";
      (this.femaleRef.current as HTMLInputElement).value = "";
      (this.fileRef.current as HTMLInputElement).value = "";
    }
  }

  render(): React.ReactNode {
    return (
      <div className="container">
        <div className="form-container">
          <form action="" className="form">
            <div className="input-wrapper">
              <input
                ref={this.nameInputRef}
                type="text"
                className="input"
                placeholder="Name"
              />
              <p className="input-invalid">
                {this.state.isValidName
                  ? "Invalid Name, please use letters!"
                  : ""}
              </p>
            </div>

            <div className="input-wrapper">
              <input
                ref={this.birthdayRef}
                type="date"
                className="input"
                placeholder="Input"
              />
              <p className="input-invalid">
                {this.state.isValidDate
                  ? "Invalid Date, please use calendar!"
                  : ""}
              </p>
            </div>

            <div className="input-wrapper">
              <div className="select-wrapper">
                <p>Your favourite car mark: </p>
                <select defaultValue="Merc" ref={this.favCarRef}>
                  <option value="Merc">Mercedes</option>
                  <option value="BMW">BMW</option>
                  <option value="Ferrari">Ferrari</option>
                  <option value="Porche">Porche</option>
                </select>
              </div>
              <p className="input-invalid">
                {this.state.isValidCar ? "Please, choose one car!" : ""}
              </p>
            </div>

            <div className="input-wrapper">
              <div className="select-wrapper">
                <p>Do you agree?: </p>
                <input type="checkbox" ref={this.checkAgreeRef} />
              </div>
              <p className="input-invalid">
                {this.state.isAgree ? "Check the checkbox" : ""}
              </p>
            </div>

            <div className="input-wrapper">
              <label>
                <input type="radio" name="isMan" ref={this.maleRef} />
                Male
              </label>
              <label>
                <input type="radio" name="isMan" ref={this.femaleRef} />
                Female
              </label>
              <p className="input-invalid">
                {this.state.isMale ? "Check your sex" : ""}
              </p>
            </div>

            <div className="input-wrapper">
              <input type="file" ref={this.fileRef} />
              <p className="input-invalid">
                {this.state.isFile ? "Please, choose file" : ""}
              </p>
            </div>

            <button
              onClick={(e) => this.submitButton(e)}
              type="submit"
              className="submitBtn"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="cards">
          {this.state.items.length
            ? this.state.items.map((item: cardProps, index) => (
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
  }
}

export default FormPage;

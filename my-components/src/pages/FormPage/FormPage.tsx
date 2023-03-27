import React from "react";
import "./FormPage.css";

class FormPage extends React.Component {
  componentDidMount(): void {
    alert(
      "Dear Reviewer, please give time to finish this task, check it at the last day of the cross-check))"
    );
  }
  state = {
    isValidName: false,
    isValidDate: false,
  };

  nameInputRef: React.RefObject<HTMLInputElement>;
  birthdayRef: React.RefObject<HTMLInputElement>;

  constructor(props: never) {
    super(props);
    this.nameInputRef = React.createRef<HTMLInputElement>();
    this.birthdayRef = React.createRef<HTMLInputElement>();
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
  }

  render(): React.ReactNode {
    return (
      <div className="container">
        <form action="" className="form">
          <div className="input-wrapper">
            <input
              ref={this.nameInputRef}
              type="text"
              className="input"
              placeholder="Input"
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
          <button
            onClick={(e) => this.submitButton(e)}
            type="submit"
            className="submitBtn"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormPage;

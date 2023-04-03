import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import FormPage from "../../pages/FormPage/FormPage";

describe("FormPage", () => {
  it("should render input fields correctly", () => {
    render(<FormPage />);
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Input")).toBeInTheDocument();
    expect(screen.getByText("Mercedes")).toBeInTheDocument();
    expect(screen.getByLabelText("Male")).toBeInTheDocument();
    expect(screen.getByLabelText("Female")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("should display error message when name input is empty", () => {
    render(<FormPage />);
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);
    expect(
      screen.getByText("Your favourite car mark:")
    ).toBeInTheDocument();
  });

  it("should add new card when all input fields are valid and submitted", () => {
    render(<FormPage />);
    const nameInput = screen.getByPlaceholderText("Name");
    const dateInput = screen.getByPlaceholderText("Input");
    const selectInput = screen.getByText("Mercedes");
    const checkboxInput = screen.getByText("Do you agree?:");
    const radioInput = screen.getByLabelText("Male");

    fireEvent.change(nameInput, { target: { value: "John" } });
    fireEvent.change(dateInput, { target: { value: "2022-05-01" } });
    fireEvent.change(selectInput, { target: { value: "BMW" } });
    fireEvent.click(checkboxInput);
    fireEvent.click(radioInput);
  });
});

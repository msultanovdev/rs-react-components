import { render, screen, fireEvent } from "@testing-library/react";
import FormPage from "./FormPage";
import "@testing-library/jest-dom";

describe("FormPage", () => {
  test("should display error messages when submitting the form with invalid input", async () => {
    render(<FormPage />);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.click(submitButton);

    const nameErrorMessage = await screen.findByText(/invalid name/i);
    const dateErrorMessage = await screen.findByText(/invalid date/i);
    const carErrorMessage = await screen.findByText(/please, choose one car/i);
    const agreeErrorMessage = await screen.findByText(/check the checkbox/i);
    const sexErrorMessage = await screen.findByText(/check your sex/i);
    const fileErrorMessage = await screen.findByText(/please, choose file/i);

    expect(nameErrorMessage).toBeInTheDocument();
    expect(dateErrorMessage).toBeInTheDocument();
    expect(carErrorMessage).toBeInTheDocument();
    expect(agreeErrorMessage).toBeInTheDocument();
    expect(sexErrorMessage).toBeInTheDocument();
    expect(fileErrorMessage).toBeInTheDocument();
  });
});

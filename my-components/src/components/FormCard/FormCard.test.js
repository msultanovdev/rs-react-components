import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FormCard from "./FormCard";

const mockCreateObjectURL = jest.fn();
global.URL.createObjectURL = mockCreateObjectURL;

describe("FormCard", () => {
  const mockData = {
    name: "John Doe",
    date: "1990-01-01",
    chooseSelection: "Male",
    car: "Tesla",
    file: new File(["(⌐□_□)"], "test.png", { type: "image/png" }),
  };

  it("should render component with given props", () => {
    render(<FormCard {...mockData} />);

    expect(screen.getByText(/name: john doe/i)).toBeInTheDocument();
    expect(screen.getByText(/birthday: 1990-01-01/i)).toBeInTheDocument();
    expect(screen.getByText(/sex: male/i)).toBeInTheDocument();
    expect(screen.getByText(/favourite car: tesla/i)).toBeInTheDocument();
    expect(screen.getByAltText(/form-card/i)).toBeInTheDocument();
  });
});

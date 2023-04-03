import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormCard from "../FormCard/FormCard";

describe("FormCard", () => {
  const mockProps = {
    name: "John Doe",
    date: "1990-01-01",
    chooseSelection: "Male",
    car: "BMW",
    file: new File(["dummy content"], "test.jpg", { type: "image/jpeg" }),
  };

  beforeEach(() => {
    // Mock the createObjectURL method
    window.URL.createObjectURL = jest.fn(() => "mockImageUrl");
  });

  afterEach(() => {
    // Clean up the mock after each test
    window.URL.createObjectURL.mockRestore();
  });

  it("renders the component with given props", () => {
    const { getByText, getByAltText } = render(<FormCard {...mockProps} />);

    expect(getByText(/Name: John Doe/)).toBeInTheDocument();
    expect(getByText(/Birthday: 1990-01-01/)).toBeInTheDocument();
    expect(getByText(/Sex: Male/)).toBeInTheDocument();
    expect(getByText(/Favourite Car: BMW/)).toBeInTheDocument();
    expect(getByAltText(/form-card/)).toHaveAttribute("src", "mockImageUrl");
  });
});

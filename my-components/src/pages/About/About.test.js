import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About component", () => {
  test("renders about page title", () => {
    render(<About />);
    const titleElement = screen.getByTestId("about-title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent("About Page");
  });
});

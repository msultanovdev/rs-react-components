import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../../pages/About/About";
test("About page rendering", () => {
  render(<About />);
  const about = screen.getByTestId("about");
  expect(about).toBeInTheDocument();
  const aboutTitle = screen.getByTestId("about-title");
  expect(aboutTitle).toHaveTextContent("About Page");
});

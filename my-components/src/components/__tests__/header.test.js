import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Header from "../Header/Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  test("renders the navigation links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const homeLink = screen.getByText("Home");
    const aboutLink = screen.getByText("About");
    const formLink = screen.getByText("Form");

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(formLink).toBeInTheDocument();
  });
});

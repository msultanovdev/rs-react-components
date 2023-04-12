import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header", () => {
  it("should render nav links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Form")).toBeInTheDocument();
  });

  it("should display current location path", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText("about")).toBeInTheDocument();
  });
});

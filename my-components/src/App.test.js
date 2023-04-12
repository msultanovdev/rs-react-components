import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainContext } from "./mainContext";
import App from "./App";

describe("App", () => {
  it("renders the header and the main content", () => {
    const { getByText } = render(
      <MemoryRouter>
        <MainContext.Provider value={{}}>
          <App />
        </MainContext.Provider>
      </MemoryRouter>
    );
    const header = getByText("Home");
    expect(header).toBeInTheDocument();
  });
});

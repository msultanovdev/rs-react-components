import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MainContext } from "./mainContext";

describe("mainContext", () => {
  it("renders children correctly", () => {
    const children = <div>Test Children</div>;
    const { getByText } = render(
      <MainContext.Provider
        value={{
          items: [],
          setItems: jest.fn(),
          isModalActive: false,
          setIsModalActive: jest.fn(),
        }}
      >
        {children}
      </MainContext.Provider>
    );
    expect(getByText("Test Children")).toBeInTheDocument();
  });
});

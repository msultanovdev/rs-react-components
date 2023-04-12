import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import axios from "axios";
import Main from "./Main";
import { MainContext } from "../../mainContext";

jest.mock("axios");

const mockData = {
  data: {
    results: [
      {
        id: 1,
        name: "Rick",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        species: "Human",
      },
      {
        id: 2,
        name: "Morty",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        species: "Human",
      },
    ],
  },
};

describe("Main", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue(mockData);
  });

  it("renders the Main component", async () => {
    await act(async () => {
      render(
        <MainContext.Provider
          value={{
            items: [],
            setItems: () => {},
            isModalActive: false,
            setIsModalActive: () => {},
          }}
        >
          <Main />
        </MainContext.Provider>
      );
    });

    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByTestId("card-block")).toBeInTheDocument();
  });

  it("displays the cards with characters", async () => {
    await act(async () => {
      render(
        <MainContext.Provider
          value={{
            items: [],
            setItems: () => {},
            isModalActive: false,
            setIsModalActive: () => {},
          }}
        >
          <Main />
        </MainContext.Provider>
      );
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(screen.getByText("Rick")).toBeInTheDocument();
    expect(screen.getByText("Morty")).toBeInTheDocument();
  });

  it("displays an error message if there are no characters to display", async () => {
    axios.get.mockResolvedValue({ data: { results: [] } });

    await act(async () => {
      render(
        <MainContext.Provider
          value={{
            items: [],
            setItems: () => {},
            isModalActive: false,
            setIsModalActive: () => {},
          }}
        >
          <Main />
        </MainContext.Provider>
      );
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(screen.getByText("Not data found...")).toBeInTheDocument();
  });
});

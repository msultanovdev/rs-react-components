import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import Main from "./Main";
import { MainContext } from "../../mainContext";

jest.mock("axios");

describe("Main", () => {
  const items = [
    {
      id: 1,
      name: "Rick Sanchez",
      species: "Human",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      id: 2,
      name: "Morty Smith",
      species: "Human",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
  ];

  test("displays loading message while fetching data", async () => {
    axios.get.mockResolvedValue({ data: { results: items } });

    render(
      <MainContext.Provider value={{ items: [] }}>
        <Main />
      </MainContext.Provider>
    );

    expect(screen.getByText("Progressing...")).toBeInTheDocument();
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
  });

  test("displays cards with data when loaded", async () => {
    axios.get.mockResolvedValue({ data: { results: items } });

    render(
      <MainContext.Provider value={{ items: [] }}>
        <Main />
      </MainContext.Provider>
    );

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    expect(screen.queryByText("Progressing...")).not.toBeInTheDocument();
    expect(screen.getByTestId("card-block")).toHaveTextContent(
      items[0].name,
      items[0].species,
      items[1].name,
      items[1].species
    );
  });
});

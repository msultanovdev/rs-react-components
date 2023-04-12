import { render, screen } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import ModalView from "./ModalView";

jest.mock("axios");

describe("ModalView", () => {
  const item = {
    id: 1,
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    species: "Human",
    gender: "Male",
    status: "Alive",
  };

  beforeEach(() => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: item }));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should render item details in modal when id is provided", async () => {
    render(<ModalView id={1} />);
    const itemName = await screen.findByText(item.name);
    const itemSpecies = await screen.findByText(`Species: ${item.species}`);
    const itemGender = await screen.findByText(`Gender: ${item.gender}`);
    const itemStatus = await screen.findByText(`Status: ${item.status}`);
    expect(itemName).toBeInTheDocument();
    expect(itemSpecies).toBeInTheDocument();
    expect(itemGender).toBeInTheDocument();
    expect(itemStatus).toBeInTheDocument();
  });
});

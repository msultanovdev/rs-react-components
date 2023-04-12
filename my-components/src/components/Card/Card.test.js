import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

const testData = {
  name: "Rick Sanchez",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  species: "Human",
};

describe("Card component", () => {
  it("should render the card correctly with the given props", () => {
    const { getByTestId } = render(
      <Card
        name={testData.name}
        image={testData.image}
        species={testData.species}
      />
    );

    expect(getByTestId("card")).toBeInTheDocument();
    expect(getByTestId("card-title")).toHaveTextContent(testData.name);
    expect(getByTestId("card-image")).toHaveAttribute("src", testData.image);
    expect(getByTestId("card-description")).toHaveTextContent(testData.species);
  });
});

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the search bar", () => {
    render(<SearchBar />);
    const searchInput = screen.getByTestId("search-input");
    const searchButton = screen.getByTestId("search-button");

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
});

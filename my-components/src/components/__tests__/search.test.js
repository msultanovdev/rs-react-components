import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "../SearchBar/SearchBar";
test("Main rendering", () => {
  render(<SearchBar />);
  const searchInput = screen.getByTestId("search-input");
  expect(searchInput).toBeInTheDocument();
  const seacrhButton = screen.getByTestId("search-button");
  expect(seacrhButton).toBeInTheDocument();
  expect(seacrhButton).toHaveTextContent("Search");
});

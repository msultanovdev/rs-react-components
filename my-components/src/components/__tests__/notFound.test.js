import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotFound from "../../pages/NotFound/NotFound";

test("Main rendering", () => {
  render(<NotFound />);
  const notFound = screen.getByTestId("not-found");
  expect(notFound).toBeInTheDocument();
});

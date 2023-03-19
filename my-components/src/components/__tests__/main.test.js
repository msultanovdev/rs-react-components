import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "../../pages/Main/Main";

test("Main rendering", () => {
  render(<Main />);
  const cardBlock = screen.getByTestId("card-block");
  expect(cardBlock).toBeInTheDocument();
});

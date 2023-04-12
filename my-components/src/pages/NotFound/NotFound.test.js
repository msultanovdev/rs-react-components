import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import NotFound from "./NotFound";

describe("NotFound component", () => {
  test("renders the not found message", () => {
    const { getByTestId } = render(<NotFound />);
    const notFoundElement = getByTestId("not-found");
    expect(notFoundElement).toBeInTheDocument();
    expect(notFoundElement).toHaveTextContent("Not Found Page (404 Error)");
  });
});

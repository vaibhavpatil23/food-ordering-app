import { render, screen } from "@testing-library/react";
import Contact from "../componant/Contact";
import "@testing-library/jest-dom";

test("shoud load Contact US componant", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

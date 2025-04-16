import FavoriteIcon from "./FavoriteButton";
import { screen, render } from "@testing-library/react";

test("renders an icon", () => {
  render(<FavoriteIcon slug="test-slug" />);
  const icon = screen.getByTestId("icon-testing");
  expect(icon).toBeInTheDocument();
});

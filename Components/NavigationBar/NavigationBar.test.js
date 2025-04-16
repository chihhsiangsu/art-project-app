import { NavigationBar } from "./NavigationBar";
import { screen, render } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/",
  }),
}));

test("renders a navigation component with three links", () => {
  render(<NavigationBar />);

  const Spotlightlink = screen.getByRole("link", { name: /Spotlight/i });
  expect(Spotlightlink).toBeInTheDocument();
  const Gallerylink = screen.getByRole("link", { name: /Gallery/i });
  expect(Gallerylink).toBeInTheDocument();
  const Favoritelink = screen.getByRole("link", { name: /Favorites/i });
  expect(Favoritelink).toBeInTheDocument();
});

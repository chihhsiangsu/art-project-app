import { screen, render } from "@testing-library/react";
import ArtPiecesList from "./ArtPiecesList";

test("shows loading message while fetching", () => {
  global.fetch = jest.fn(() => new Promise(() => {}));

  render(<ArtPiecesList />);
  expect(screen.getByText(/loading art pieces/i)).toBeInTheDocument();
});

test("shows error message on fetch failure", async () => {
  global.fetch = jest.fn(() => Promise.reject(new Error("Fetch failed")));
  render(<ArtPiecesList />);
  expect(await screen.findByText(/error: fetch failed/i)).toBeInTheDocument();
});

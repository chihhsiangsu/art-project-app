import { screen, render } from "@testing-library/react";
import { ArtPiecePreview } from "./ArtPiecePreview";

test("render the art preview pomponent", () => {
  render(<ArtPiecePreview piece="test-object" />);
  const previewCard = screen.getByTestId("art-piece-preview");
  expect(previewCard).toBeInTheDocument();
});

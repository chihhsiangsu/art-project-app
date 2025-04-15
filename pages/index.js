import { NavigationBar } from "@/Components/NavigationBar/NavigationBar";
import SpotLightPiece from "@/Components/SpotlightPiece/SpotlightPiece";
import { StyledBody, StyledHeading } from "@/Components/StyledComponents";

export default function HomePage() {
  return (
    <>
      <StyledHeading>Piece of The Day</StyledHeading>
      <SpotLightPiece />
      <NavigationBar />
    </>
  );
}

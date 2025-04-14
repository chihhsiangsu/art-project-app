import { NavigationBar } from "@/Components/NavigationBar/NavigationBar";
import SpotLightPiece from "@/Components/SpotlightPiece/SpotlightPiece";
import { StyledHeading } from "@/Components/StyledComponents";

export default function HomePage() {
  return (
    <div>
      <StyledHeading>Piece of The Day</StyledHeading>
      <SpotLightPiece />
      <NavigationBar />
    </div>
  );
}

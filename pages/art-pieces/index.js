import ArtPiecesList from "@/Components/ArtPiecesList/ArtPiecesList";
import { NavigationBar } from "@/Components/NavigationBar/NavigationBar";
import { StyledHeading } from "@/Components/StyledComponents";

export default function GalleryPage({ clicked, toggleClick }) {
  return (
    <>
      <StyledHeading>Art Gallery</StyledHeading>
      <ArtPiecesList clicked={clicked} toggleClick={toggleClick} />
      <NavigationBar />
    </>
  );
}

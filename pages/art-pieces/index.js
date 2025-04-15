import ArtPiecesList from "@/Components/ArtPiecesList/ArtPiecesList";
import { NavigationBar } from "@/Components/NavigationBar/NavigationBar";
import { StyledBody } from "@/Components/StyledComponents";

export default function GalleryPage() {
  return (
    <StyledBody>
      <h1>Art Gallery</h1>
      <ArtPiecesList />
      <NavigationBar />
    </StyledBody>
  );
}

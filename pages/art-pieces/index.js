import ArtPiecesList from "@/Components/ArtPiecesList/ArtPiecesList";
import { NavigationBar } from "@/Components/NavigationBar/NavigationBar";
import { StyledHeading } from "@/Components/StyledComponents";

export default function GalleryPage() {
  return (
    <>
      <StyledHeading>Art Gallery</StyledHeading>
      <ArtPiecesList />
      <NavigationBar />
    </>
  );
}

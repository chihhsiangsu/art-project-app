import ArtPiecesList from "@/Components/ArtPiecesList/ArtPiecesList";
import { NavigationBar } from "@/Components/NavigationBar/NavigationBar";
import { StyledHeading } from "@/Components/StyledComponents";
import { useState } from "react";

export default function GalleryPage() {
  const [favoritePieces, setFavoritePieces] = useState([]);
  function handleFavoriteToggle(slug) {
    setFavoritePieces((PiecesList) =>
      PiecesList.includes(slug)
        ? PiecesList.filter((slug) => slug !== slug)
        : [...PiecesList, slug]
    );
  }

  return (
    <>
      <StyledHeading>Art Gallery</StyledHeading>
      <ArtPiecesList
        favoritePieces={favoritePieces}
        onToggleFavorate={handleFavoriteToggle}
      />
      <NavigationBar />
    </>
  );
}

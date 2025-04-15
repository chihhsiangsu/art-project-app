import { useEffect, useState } from "react";
import { ArtPiecePreview } from "@/Components/ArtPiecesPreview/ArtPiecePreview";
import { useFavoritesStore } from "@/GlobalStore/useFavorateStore";
import { NavigationBar } from "@/Components/NavigationBar/NavigationBar";
import { StyledHeading } from "@/Components/StyledComponents";

export default function Favorites() {
  const [artPieces, setArtPieces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const favorites = useFavoritesStore((state) => state.favorites);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://example-apis.vercel.app/api/art");
        const data = await response.json();
        setArtPieces(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) return <p>Loading favorites...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const favoritePieces = artPieces.filter((piece) =>
    favorites.includes(piece.slug)
  );

  return (
    <>
      <StyledHeading>Favorite</StyledHeading>
      {favoritePieces.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoritePieces.map((piece) => (
          <ArtPiecePreview key={piece.slug} piece={piece} />
        ))
      )}
      <NavigationBar />
    </>
  );
}

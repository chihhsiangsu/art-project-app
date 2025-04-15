import { ArtPiecePreview } from "@/Components/ArtPiecesPreview/ArtPiecePreview";
import { NavigationBar } from "@/Components/NavigationBar/NavigationBar";
import { StyledHeading } from "@/Components/StyledComponents";
import { useEffect, useState } from "react";

export default function FavoriteArtPiecesList({ clicked, toggleClick }) {
  const [artPieces, setArtPieces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (isLoading) return <p>Loading favorite pieces...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // 🔥 Filter only favorited pieces based on `clicked`
  const favoritePieces = artPieces.filter((piece) =>
    clicked.includes(piece.slug)
  );

  return (
    <>
      <StyledHeading>Your Favorite Pieces</StyledHeading>
      {favoritePieces.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          You haven’t favorited anything yet.
        </p>
      ) : (
        favoritePieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            piece={piece}
            isClicked={true}
            toggleClick={toggleClick}
          />
        ))
      )}
      <NavigationBar />
    </>
  );
}

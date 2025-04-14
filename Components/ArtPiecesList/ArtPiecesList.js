import { useEffect, useState } from "react";
import { ArtPiecePreview } from "../ArtPiecesPreview/ArtPiecePreview";
import { StyleBody } from "../StyledComponents";

export default function ArtPiecesList() {
  const [artPieces, setArtPieces] = useState([]);
  const [spotlightPieces, setsSpotlightPieces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://example-apis.vercel.app/api/art");
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        setsSpotlightPieces(data[randomIndex]);
        setArtPieces(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) return <p>Loading art pieces...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <StyleBody>
      {artPieces.map((piece) => (
        <ArtPiecePreview key={piece.slug} piece={piece} />
      ))}
    </StyleBody>
  );
}

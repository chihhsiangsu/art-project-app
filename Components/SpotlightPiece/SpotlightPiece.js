import { useEffect, useState } from "react";
import { ArtPiecePreview } from "../ArtPiecesPreview/ArtPiecePreview";

export default function SpotLightPiece() {
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
    <>
      <ArtPiecePreview piece={spotlightPieces} />
    </>
  );
}

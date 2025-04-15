import { useEffect, useState } from "react";
import { ArtPiecePreview } from "../ArtPiecesPreview/ArtPiecePreview";

export default function ArtPiecesList({ clicked, toggleClick }) {
  const [artPieces, setArtPieces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://example-apis.vercel.app/api/art");
        const data = await response.json();
        console.log(data);
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
    <>
      {artPieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          piece={piece}
          isClicked={clicked.includes(piece.slug)}
          toggleClick={toggleClick}
        />
      ))}
    </>
  );
}

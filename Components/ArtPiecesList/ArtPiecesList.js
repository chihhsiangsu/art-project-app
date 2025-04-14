import { useEffect, useState } from "react";
import { ArtPiecePreview } from "../ArtPiecesPreview/ArtPiecePreview";
import { Fragment } from "react";

export default function ArtPiecesList() {
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

  if (isLoading) return <p>Loading art pieces...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Fragment>
      {artPieces.map((piece) => (
        <ArtPiecePreview key={piece.slug} piece={piece} />
      ))}
    </Fragment>
  );
}

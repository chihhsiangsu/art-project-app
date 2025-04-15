import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router.js";
import { useState, useEffect } from "react";

export default function ArtPieceDetail() {
  const router = useRouter();
  const { slug } = router.query;

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

  const piece = artPieces.find((piece) => piece.slug === slug);
  const { artist, colors, genre, imageSource, name, year } = piece;

  return (
    <>
      <h1>{name}</h1>
    </>
  );
}

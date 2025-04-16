import {
  StyledArtist,
  StyledCard,
  StyledImage,
  StyledInfo,
} from "@/Components/StyledComponents";
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
    <StyledCard>
      <StyledImage style={{ height: "450px" }} src={imageSource} alt={name} />
      <h3 style={{ textAlign: "center", margin: "px" }}>{name}</h3>
      <StyledArtist style={{ textAlign: "center" }}>by {artist}</StyledArtist>
      <StyledInfo style={{ textAlign: "center", margin: "0px" }}>
        <h5 style={{ textAlign: "center", margin: "0px" }}>Year: {year}</h5>
        <h5 style={{ textAlign: "center", margin: "0px" }}>Genre: {genre}</h5>
        <h5
          style={{ textAlign: "center", marginTop: "10px", marginBottom: "0" }}
        >
          Colors:
        </h5>
        <div
          style={{
            display: "flex",
            gap: "8px",
            margin: "1rem 0",
            justifyContent: "center",
          }}
        >
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: color,
              }}
            />
          ))}
        </div>
        <Link href="/art-pieces">Back to Gallery</Link>
      </StyledInfo>
    </StyledCard>
  );
}

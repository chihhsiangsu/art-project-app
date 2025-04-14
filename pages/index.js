import SpotLightPiece from "@/Components/SpotlightPiece/SpotlightPiece";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Piece of The Day</h1>
      <SpotLightPiece />
      <Link href="art-pieces">Art Gallery</Link>
    </div>
  );
}

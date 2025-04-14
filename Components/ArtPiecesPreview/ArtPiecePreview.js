import { Card, Image, Info, Title, Artist } from ".";

export function ArtPiecePreview({ piece }) {
  return (
    <Card>
      <Image src={piece.imageSource} alt={piece.name} />
      <Info>
        <Title>{piece.name}</Title>
        <Artist>by {piece.artist}</Artist>
      </Info>
    </Card>
  );
}

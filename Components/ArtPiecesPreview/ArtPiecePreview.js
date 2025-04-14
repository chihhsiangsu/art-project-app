import {
  StyledArtist,
  StyledCard,
  StyledImage,
  StyledInfo,
  StyledTitle,
} from "../StyledComponents";

export function ArtPiecePreview({ piece }) {
  return (
    <StyledCard>
      <StyledImage src={piece.imageSource} alt={piece.name} />
      <StyledInfo>
        <StyledTitle>{piece.name}</StyledTitle>
        <StyledArtist>by {piece.artist}</StyledArtist>
      </StyledInfo>
    </StyledCard>
  );
}

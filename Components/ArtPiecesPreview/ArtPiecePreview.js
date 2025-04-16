import Link from "next/link";
import {
  FavoriteContainer,
  StyledArtist,
  StyledCard,
  StyledImage,
  StyledInfo,
  StyledTitle,
} from "../StyledComponents";
import FavoriteIcon from "../FavoraiteButton/FavoriteButton";

export function ArtPiecePreview({ piece }) {
  return (
    <StyledCard data-testid="art-piece-preview">
      <FavoriteContainer>
        <FavoriteIcon slug={piece.slug} />
      </FavoriteContainer>
      <StyledImage src={piece.imageSource} alt={piece.name} />
      <StyledInfo>
        <StyledTitle>{piece.name}</StyledTitle>
        <StyledArtist>by {piece.artist}</StyledArtist>
        <Link style={{ color: "grey" }} href={`/art-pieces/${piece.slug}`}>
          Detail
        </Link>
      </StyledInfo>
    </StyledCard>
  );
}

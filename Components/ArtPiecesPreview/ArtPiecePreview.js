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

export function ArtPiecePreview({ piece, toggleClick, isClicked }) {
  return (
    <StyledCard>
      <FavoriteContainer>
        <FavoriteIcon
          isClicked={isClicked}
          onClick={() => toggleClick(piece.slug)}
        />
      </FavoriteContainer>
      <StyledImage src={piece.imageSource} alt={piece.name} />
      <StyledInfo>
        <StyledTitle>{piece.name}</StyledTitle>
        <StyledArtist>by {piece.artist}</StyledArtist>
        <Link href={`/art-pieces/${piece.slug}`}>Detail</Link>
      </StyledInfo>
    </StyledCard>
  );
}

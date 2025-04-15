import { StyledFavoriteIcon } from "../StyledComponents";

export default function FavoriteIcon({ onClick, isClicked }) {
  return (
    <StyledFavoriteIcon
      src={isClicked ? "/favorite-active.svg" : "/favorite.svg"}
      onClick={onClick}
    />
  );
}

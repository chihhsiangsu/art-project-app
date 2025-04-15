import { StyledFavoriteIcon } from "../StyledComponents";
import { useState } from "react";

export default function FavoriteIcon({ piece, isFavorite, onToggleFavorite }) {
  const [clicked, setClicked] = useState(false);
  return (
    <StyledFavoriteIcon
      src={isFavorite ? "/favorite-active.svg" : "/favorite.svg"}
      onClick={() => onToggleFavorite(piece)}
    />
  );
}

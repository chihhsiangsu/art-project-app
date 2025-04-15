import { StyledFavoriteIcon } from "../StyledComponents";
import { useState } from "react";

export default function FavoriteIcon({}) {
  const [clicked, setClicked] = useState(false);
  return (
    <StyledFavoriteIcon
      src={clicked ? "/favorite-active.svg" : "/favorite.svg"}
      onClick={() => setClicked(!clicked)}
    />
  );
}

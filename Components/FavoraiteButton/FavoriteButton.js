import { useFavoritesStore } from "@/GlobalStore/useFavorateStore";
import { StyledFavoriteIcon } from "../StyledComponents";

export default function FavoriteIcon({ slug }) {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const isFavorite = favorites.includes(slug);

  return (
    <StyledFavoriteIcon
      src={isFavorite ? "/favorite-active.svg" : "/favorite.svg"}
      onClick={() => toggleFavorite(slug)}
    />
  );
}

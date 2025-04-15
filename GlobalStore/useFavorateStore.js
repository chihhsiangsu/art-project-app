import { create } from "zustand";

export const useFavoritesStore = create((set) => ({
  favorites: [],
  toggleFavorite: (slug) =>
    set((state) => ({
      favorites: state.favorites.includes(slug)
        ? state.favorites.filter((element) => element !== slug)
        : [...state.favorites, slug],
    })),
}));

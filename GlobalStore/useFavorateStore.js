import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (slug) =>
        set((state) => ({
          favorites: state.favorites.includes(slug)
            ? state.favorites.filter((element) => element !== slug)
            : [...state.favorites, slug],
        })),
    }),
    {
      name: "favorites-storage",
    }
  )
);

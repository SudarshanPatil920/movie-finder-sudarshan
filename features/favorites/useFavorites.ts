"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { FAVORITES_KEY } from "@/lib/constants";
import type { Movie } from "@/types/movie";

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<Movie[]>(FAVORITES_KEY, []);
  const isFavorite = (id: number) => favorites.some((movie) => movie.id === id);
  const toggleFavorite = (movie: Movie) => {
    setFavorites(
      isFavorite(movie.id)
        ? favorites.filter((item) => item.id !== movie.id)
        : [movie, ...favorites],
    );
  };
  return { favorites, isFavorite, toggleFavorite };
}

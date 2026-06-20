"use client";
import { useFavorites } from "@/features/favorites/useFavorites";
import type { Movie } from "@/types/movie";
export function FavoriteButton({ movie }: { movie: Movie }) { const { isFavorite, toggleFavorite } = useFavorites(); const active = isFavorite(movie.id); return <button onClick={(event) => { event.preventDefault(); toggleFavorite(movie); }} aria-label={active ? `Remove ${movie.title} from favorites` : `Add ${movie.title} to favorites`} aria-pressed={active} className="grid size-9 place-items-center rounded-full bg-black/55 text-lg text-white backdrop-blur transition hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">{active ? "★" : "☆"}</button>; }

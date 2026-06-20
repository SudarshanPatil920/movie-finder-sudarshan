"use client";
import { MovieGrid } from "@/components/movies/MovieGrid";
import { EmptyState } from "@/components/states/EmptyState";
import { useFavorites } from "@/features/favorites/useFavorites";
export default function FavoritesPage() { const { favorites } = useFavorites(); return <main className="mx-auto max-w-7xl px-5 py-14"><p className="text-sm font-medium tracking-[0.2em] text-gold">YOUR WATCHLIST</p><h1 className="mt-3 text-4xl font-semibold tracking-tight">Favorites</h1><p className="mt-3 text-zinc-400">The movies you want to keep close.</p><div className="mt-10">{favorites.length ? <MovieGrid movies={favorites} /> : <EmptyState title="Your watchlist is waiting" detail="Star a film from discovery and it will live here, even after you refresh." />}</div></main>; }

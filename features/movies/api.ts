import { movieDetailsSchema, moviePageSchema } from "@/features/movies/schemas";
import { tmdbHeaders, tmdbUrl } from "@/lib/tmdb";
import type { Movie, MovieDetails, MoviePage } from "@/types/movie";

const toMovie = (item: { id: number; title: string; poster_path: string | null; backdrop_path: string | null; release_date: string | null; vote_average: number; overview: string; genre_ids: number[] }): Movie => ({ id: item.id, title: item.title, posterPath: item.poster_path, backdropPath: item.backdrop_path, releaseDate: item.release_date, rating: item.vote_average, overview: item.overview, genreIds: item.genre_ids });
async function request(url: string) { const response = await fetch(url, { headers: tmdbHeaders() }); if (!response.ok) throw new Error(response.status === 401 ? "Your TMDB API key was rejected." : "We couldn’t reach the movie archive. Please try again."); return response.json() as Promise<unknown>; }
export async function getMovies(page: number, query = ""): Promise<MoviePage> { const data = moviePageSchema.parse(await request(tmdbUrl(query ? "/search/movie" : "/movie/popular", { page, include_adult: "false", query }))); return { page: data.page, totalPages: data.total_pages, results: data.results.map(toMovie).slice(0, 12) }; }
export async function getMovie(id: string): Promise<MovieDetails> { const item = movieDetailsSchema.parse(await request(tmdbUrl(`/movie/${id}`))); return { ...toMovie(item), runtime: item.runtime, genres: item.genres }; }

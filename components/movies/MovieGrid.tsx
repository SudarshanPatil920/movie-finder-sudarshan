import { MovieCard } from "@/components/movies/MovieCard";
import type { Movie } from "@/types/movie";
export function MovieGrid({ movies }: { movies: Movie[] }) { return <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:gap-x-5 lg:grid-cols-4 xl:grid-cols-6">{movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}</div>; }

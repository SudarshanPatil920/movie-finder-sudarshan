export type Movie = { id: number; title: string; posterPath: string | null; backdropPath: string | null; releaseDate: string | null; rating: number; overview: string; genreIds: number[] };
export type MovieDetails = Movie & { runtime: number | null; genres: { id: number; name: string }[] };
export type MoviePage = { page: number; totalPages: number; results: Movie[] };

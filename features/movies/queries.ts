import { useQuery } from "@tanstack/react-query";
import { getMovie, getMovies } from "@/features/movies/api";
export const useMovies = (page: number, search: string) => useQuery({ queryKey: ["movies", page, search], queryFn: () => getMovies(page, search) });
export const useMovie = (id: string) => useQuery({ queryKey: ["movie", id], queryFn: () => getMovie(id) });

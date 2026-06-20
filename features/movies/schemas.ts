import { z } from "zod";
const movie = z.object({ id: z.number(), title: z.string().default("Untitled"), poster_path: z.string().nullable().default(null), backdrop_path: z.string().nullable().default(null), release_date: z.string().nullable().default(null), vote_average: z.number().default(0), overview: z.string().default(""), genre_ids: z.array(z.number()).default([]) });
export const moviePageSchema = z.object({ page: z.number(), total_pages: z.number(), results: z.array(movie) });
export const movieDetailsSchema = movie.extend({ runtime: z.number().nullable().default(null), genres: z.array(z.object({ id: z.number(), name: z.string() })).default([]) });

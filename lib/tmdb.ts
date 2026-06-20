export const tmdbHeaders = () => {
  const token = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  if (!token) throw new Error("TMDB API key is missing. Add NEXT_PUBLIC_TMDB_API_KEY to .env.local.");
  return { Authorization: `Bearer ${token}`, accept: "application/json" };
};
export const tmdbUrl = (path: string, params: Record<string, string | number> = {}) => {
  const url = new URL(`https://api.themoviedb.org/3${path}`);
  Object.entries({ language: "en-US", ...params }).forEach(([key, value]) => url.searchParams.set(key, String(value)));
  return url.toString();
};

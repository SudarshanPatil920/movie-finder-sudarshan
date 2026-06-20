import { FALLBACK_POSTER, IMAGE_BASE_URL } from "@/lib/constants";

export function imageUrl(path: string | null, size: "w500" | "w780" | "original" = "w500") { return path ? `${IMAGE_BASE_URL}/${size}${path}` : FALLBACK_POSTER; }
export function releaseYear(date: string | null) { return date ? new Date(`${date}T00:00:00`).getFullYear().toString() : "—"; }
export function formatRuntime(minutes: number | null) { return minutes ? `${Math.floor(minutes / 60)}h ${minutes % 60}m` : "—"; }
export function cn(...values: Array<string | false | null | undefined>) { return values.filter(Boolean).join(" "); }

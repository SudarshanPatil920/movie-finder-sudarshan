# framefinder

A premium movie discovery application built for the FS-INTERN-2026 assignment. It uses TMDB for movie data and keeps a personal watchlist in browser local storage.

## Features

- Responsive popular-movie browsing with exactly 12 titles per manual page
- Live, debounced title search with clear feedback
- Cinematic movie details at `/movie/[id]`
- Persistent localStorage favorites at `/favorites`
- Accessible loading, error, and empty states

## Stack

Next.js 15 App Router, TypeScript, Tailwind CSS, TanStack Query, Zod, ESLint, and Prettier.

## Architecture

`app` contains routes; `components` holds UI and feature presentation; `features/movies` owns TMDB validation and queries; `features/favorites` owns persistence; `lib` contains shared infrastructure; and `hooks` supply reusable browser behavior.

## Screenshots

The hero, movie grid, details view, and saved-watchlist view are designed as responsive dark-mode surfaces. Run locally to view the current UI.

## Local development

1. Copy `.env.example` to `.env.local` and add a TMDB v4 read-access token as `NEXT_PUBLIC_TMDB_API_KEY`.
2. Run `npm install`.
3. Run `npm run dev`.

## Validation and build

Run `npm run lint`, `npm run type-check`, then `npm run build`.

## Deployment

Import the repository into Vercel, add `NEXT_PUBLIC_TMDB_API_KEY` in Project Settings → Environment Variables, and deploy. Vercel detects Next.js automatically.

## Design and performance

The UI uses a restrained cinematic palette, glass navigation, responsive poster crops, and progressive image loading. TanStack Query caches requests for one minute, search is debounced, and TMDB payloads are validated with Zod before rendering.

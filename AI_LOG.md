# Tools Used

- Codex for project scaffolding, component composition, and validation passes.
- Next.js App Router and Image for route structure and optimized remote artwork.
- TanStack Query for request caching and retry behavior.
- Zod to validate TMDB payloads before they reach UI components.

# Best Prompts

- “Create a premium dark movie discovery experience with a cinematic hero and restrained amber accent.”
- “Keep pagination manual and enforce exactly twelve movie cards per result page.”
- “Design failure and empty states with the same care as the happy path.”

# What I Fixed Manually

- Restricted the rendered TMDB result set to twelve items even if a source response changes.
- Added a missing-poster SVG so image failures do not collapse the grid.
- Reset pagination when a debounced search term changes to prevent confusing result pages.
- Kept favorite mutation client-side and isolated it behind a localStorage hook.

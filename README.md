# Analytics Dashboard

A modern, responsive analytics dashboard built with Next.js, TypeScript, Tailwind CSS, and Redux Toolkit. It includes charting components, layout primitives with persistence.

## Highlights
- Next.js (App Router) + TypeScript
- Tailwind CSS 
- Global state with Redux Toolkit
- Charts built with `recharts`
- Icons from `lucide-react`
  

## Tech Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Redux Toolkit
- Recharts
- Axios

## Quick Start

Prerequisites: Node.js (18+ recommended) and npm.

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 — the app redirects to `/dashboard` on load.

## Available Scripts
- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run start` — start production server
- `npm run lint` — run ESLint

## Project Structure (important files)

- `app/` — Next.js App Router pages and layout
  - `layout.tsx` — root layout and providers
  - `page.tsx` — redirects to the dashboard
  - `providers.tsx` — Redux provider
  - `Components/` — UI components, layout, charts, and `ThemeProvider`
- `src/data/` — sample/mock data for dashboard
- `src/store/` — Redux store and slices

## Theme Toggle
The theme toggle uses a `ThemeProvider` that reads/writes the selected theme to `localStorage` and applies/removes the `dark` class on the `document.documentElement`. If no saved preference exists, the provider falls back to the user's system `prefers-color-scheme` setting.

If you want to change the behavior, check `src/app/Components/ThemeProvider.tsx`.

## Notes & Tips
- Tailwind dark mode is implemented with the `dark` class; ensure global styles include dark variants.
- The app uses client components for interactivity; files using hooks or browser APIs include the `"use client"` directive.
- Charts and data components rely on `recharts`; provide real endpoints or mock data in `src/data`.

## Contributing
Feel free to open issues or submit pull requests. For large changes, open an issue first to discuss scope and design.

## License
This repository does not include a license file. Add one if you plan to publish or share the project.

---

If you'd like, I can:
- Run the dev server and verify the theme toggle behavior
- Add a screenshot or demo GIF to this README
- Add a short CONTRIBUTING guide and basic PR template

Tell me which of the above you'd like next.

# Heena Kapadia

Website for the law office of Heena Kapadia: a React single-page app built with
[Vite](https://vite.dev) and [React Router](https://reactrouter.com). MJP Hub
deploys the `dist/` build to S3 + CloudFront, which serves `index.html` for
every path.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3400](http://localhost:3400).

## Scripts

| Script              | What it does                                   |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Dev server on port 3400                        |
| `npm run build`     | Typecheck, then build the site into `dist/`    |
| `npm run preview`   | Serve the `dist/` build on port 3400           |
| `npm run typecheck` | `tsc --noEmit`                                 |
| `npm run lint`      | ESLint                                         |

## Layout

- `index.html`: the page shell, with the title, description, share tags and icons.
- `app/main.tsx`: the entry point.
- `app/router.tsx`: every route. The folders under `app/(pages)` mirror the
  URLs; parenthesised folders are groups that add a layout but no path segment.
- `app/layout.tsx`: the navbar and footer around every page.
- `public/`: files served as-is (icons, `hero.jpg`, `og.png`).

## Environment

Copy these into `.env` (or `.env.local`). In MJP Hub, set them as build env vars.

| Variable                  | Purpose                                       |
| ------------------------- | --------------------------------------------- |
| `VITE_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key for the contact form |

The contact form sends through MJP Hub's `/api/emails/send`, which holds the
Turnstile secret and checks the token.

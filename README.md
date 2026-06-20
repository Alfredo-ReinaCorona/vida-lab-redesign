# CPS-VIDA Lab Website Redesign

Static Next.js App Router prototype for the USC CPS-VIDA Lab website.

## Commands

```bash
npm install
npm run lint
npm run build
```

`npm run build` runs `next build` with `output: "export"` and writes deployable files to `out/`, including `out/.nojekyll`.

## Build targets

- GitHub Pages preview under `/vida-lab-redesign/`:
  ```bash
  NEXT_PUBLIC_BASE_PATH=/vida-lab-redesign npm run build
  ```
- Root custom domain build:
  ```bash
  npm run build
  ```

## Content editing

Potentially changing lab content lives in `src/content/`. Placeholder records must be replaced with approved names, titles, publications, news, and contact details before final launch.

# Handoff Notes

## Files created

- Next.js App Router pages in `src/app/` for Home, Research, People, Publications, and Contact.
- Reusable UI components in `src/components/`.
- Editable content modules in `src/content/`.
- Static path helper in `src/lib/paths.ts`.
- GitHub Pages workflow in `.github/workflows/deploy-pages.yml`.
- Static export configuration in `next.config.ts`.

## GitHub Pages setup steps

1. Push this branch to GitHub.
2. In the repository settings, open **Pages**.
3. Set **Build and deployment** to **GitHub Actions**.
4. Ensure the workflow has permissions to deploy Pages.
5. Push to `main` or run **Deploy static site to GitHub Pages** manually.
6. The preview build uses `NEXT_PUBLIC_BASE_PATH=/vida-lab-redesign` so routes and assets resolve below the repository path.
7. For final root-domain delivery, build without `NEXT_PUBLIC_BASE_PATH` and deploy the generated `out/` directory to the target root site.

## Remaining placeholders

See `CONTENT-TO-REPLACE.md` for the content approval checklist.

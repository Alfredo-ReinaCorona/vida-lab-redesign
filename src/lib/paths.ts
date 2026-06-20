const basePath = process.env.NEXT_PUBLIC_BASE_PATH === "/vida-lab-redesign" ? "/vida-lab-redesign" : "";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

export const siteRoutes = [
  { href: "/", label: "Home" },
  { href: "/research/", label: "Research" },
  { href: "/people/", label: "People" },
  { href: "/publications/", label: "Publications" },
  { href: "/contact/", label: "Contact" },
] as const;

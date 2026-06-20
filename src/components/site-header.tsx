import Link from "next/link";
import { siteRoutes } from "@/lib/paths";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Main navigation">
        <Link href="/" className="font-semibold tracking-tight text-slate-950">
          <span className="block text-lg">CPS-VIDA Lab</span>
          <span className="block text-xs font-medium uppercase tracking-[0.22em] text-slate-500">USC research lab</span>
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {siteRoutes.map((route) => (
            <li key={route.href}>
              <Link className="text-sm font-medium text-slate-700 hover:text-red-900" href={route.href}>{route.label}</Link>
            </li>
          ))}
        </ul>
        <details className="relative md:hidden">
          <summary className="cursor-pointer rounded border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800">Menu</summary>
          <ul className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
            {siteRoutes.map((route) => (
              <li key={route.href}><Link className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-100" href={route.href}>{route.label}</Link></li>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}

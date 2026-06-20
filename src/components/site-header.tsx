import Image from "next/image";
import Link from "next/link";
import { siteRoutes, withBasePath } from "@/lib/paths";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-[var(--usc-gold)] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Main navigation">
        <Link href="/" className="flex min-w-0 items-center gap-3 text-slate-950" aria-label="CPS-VIDA Lab home">
          <Image
            src={withBasePath("/images/cps-vida-mark.png")}
            alt="CPS-VIDA Lab mark"
            width={2106}
            height={1212}
            priority
            className="h-11 w-auto shrink-0 object-contain sm:h-12"
          />
          <span className="min-w-0">
            <span className="block text-base font-semibold tracking-tight sm:text-lg">CPS-VIDA Lab</span>
            <span className="block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-slate-500 sm:text-xs">USC Research Lab</span>
          </span>
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {siteRoutes.map((route) => (
            <li key={route.href}>
              <Link className="text-sm font-medium text-slate-700 hover:text-[var(--usc-cardinal)]" href={route.href}>{route.label}</Link>
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

import Link from "next/link";
import { siteRoutes } from "@/lib/paths";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-white">CPS-VIDA Lab</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">Verification, Intelligence, Design, and Analysis. Formal methods, control, artificial intelligence, and cyber-physical systems research at USC.</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {siteRoutes.map((route) => <li key={route.href}><Link className="hover:text-white" href={route.href}>{route.label}</Link></li>)}
          </ul>
        </nav>
      </div>
      <div className="mx-auto max-w-6xl border-t border-[var(--usc-gold)]/40 px-5 py-4 text-xs text-slate-400">
        © 2026 CPS-VIDA Lab · Website designed by{" "}
        <a className="hover:text-white" href="https://www.linkedin.com/in/alfredo-reina-corona-bb60a51a2" target="_blank" rel="noreferrer">Alfredo Reina Corona</a>
        {" "}· Built with{" "}
        <a className="hover:text-white" href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a>
        {" "}· Hosted on{" "}
        <a className="hover:text-white" href="https://pages.github.com/" target="_blank" rel="noreferrer">GitHub Pages</a>
      </div>
    </footer>
  );
}

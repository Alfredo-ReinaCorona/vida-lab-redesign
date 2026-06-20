import Link from "next/link";
import { siteRoutes } from "@/lib/paths";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-white">CPS-VIDA Lab</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">Verification, Intelligence, Design, and Analysis. This redesign uses placeholders until lab-approved content is supplied.</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {siteRoutes.map((route) => <li key={route.href}><Link className="hover:text-white" href={route.href}>{route.label}</Link></li>)}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

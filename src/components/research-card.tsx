import type { ResearchArea } from "@/content/research";

export function ResearchCard({ area }: { area: ResearchArea }) {
  return <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><p className="text-xs font-semibold uppercase tracking-widest text-[var(--usc-cardinal)]">{area.status}</p><h3 className="mt-3 text-xl font-semibold text-slate-950">{area.title}</h3><p className="mt-3 leading-7 text-slate-700">{area.summary}</p></article>;
}

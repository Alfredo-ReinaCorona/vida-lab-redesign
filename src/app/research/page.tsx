import { ResearchCard } from "@/components/research-card";
import { researchAreas } from "@/content/research";

export default function ResearchPage() {
  return <main className="mx-auto max-w-6xl px-5 py-16"><p className="text-sm font-semibold uppercase tracking-widest text-[var(--usc-cardinal)]">Research</p><h1 className="mt-3 text-4xl font-semibold text-slate-950">Research themes</h1><p className="mt-4 max-w-3xl leading-8 text-slate-700">The lab studies formal methods, control, AI, and cyber-physical systems, with themes grounded in supplied CPS-VIDA material.</p><div className="mt-10 grid gap-5 md:grid-cols-2">{researchAreas.map((area) => <ResearchCard key={area.title} area={area} />)}</div><section className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-white p-6"><h2 className="text-2xl font-semibold">Future project highlights</h2><p className="mt-3 text-slate-700">Add confirmed project descriptions, collaborators, sponsor acknowledgments, and approved figure assets here after review.</p></section></main>;
}

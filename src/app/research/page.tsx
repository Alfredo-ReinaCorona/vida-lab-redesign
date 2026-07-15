import { ResearchCard } from "@/components/research-card";
import { researchAreas } from "@/content/research";

export default function ResearchPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-[var(--usc-cardinal)]">Research</p>
      <h1 className="mt-3 text-4xl font-semibold text-slate-950">Research Directions</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {researchAreas.map((area) => (
          <ResearchCard key={area.title} area={area} />
        ))}
      </div>
    </main>
  );
}

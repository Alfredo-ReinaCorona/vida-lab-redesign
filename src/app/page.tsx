import { Hero } from "@/components/hero";
import { NewsList } from "@/components/news-list";
import { PublicationEntry } from "@/components/publication-entry";
import { ResearchCard } from "@/components/research-card";
import { newsItems } from "@/content/news";
import { publications } from "@/content/publications";
import { researchAreas } from "@/content/research";

export default function Home() {
  return (
    <main>
      <Hero />
      <section
        className="mx-auto max-w-6xl px-5 pb-10 md:pb-12"
        aria-labelledby="vida-meaning-title"
      >
        <div className="max-w-3xl border-l-4 border-[var(--usc-cardinal)] pl-5 md:pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--usc-cardinal)]">
            Lab identity
          </p>
          <h2
            id="vida-meaning-title"
            className="mt-2 text-2xl font-semibold tracking-tight text-slate-950"
          >
            More Than an Acronym
          </h2>
          <div className="mt-4 h-px w-16 bg-[var(--usc-gold)]" aria-hidden="true" />
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            VIDA is more than an acronym. In Spanish, vida means “life.” We believe that rigorous work in autonomy
            and artificial intelligence should ultimately improve the lives of the people who rely on these
            systems.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-3xl font-semibold text-slate-950">Research areas</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {researchAreas.slice(0, 4).map((area) => (
            <ResearchCard key={area.title} area={area} />
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-slate-950">Selected publications</h2>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-6">
            <PublicationEntry publication={publications[0]} />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-slate-950">News</h2>
          <div className="mt-4">
            <NewsList items={newsItems} />
          </div>
        </div>
      </section>
    </main>
  );
}

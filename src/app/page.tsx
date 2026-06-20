import { Hero } from "@/components/hero";
import { NewsList } from "@/components/news-list";
import { PublicationEntry } from "@/components/publication-entry";
import { ResearchCard } from "@/components/research-card";
import { newsItems } from "@/content/news";
import { publications } from "@/content/publications";
import { researchAreas } from "@/content/research";

export default function Home() {
  return <main><Hero /><section className="mx-auto max-w-6xl px-5 py-12"><h2 className="text-3xl font-semibold text-slate-950">Research areas</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{researchAreas.slice(0,4).map((area) => <ResearchCard key={area.title} area={area} />)}</div></section><section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-2"><div><h2 className="text-3xl font-semibold text-slate-950">Selected publications</h2><div className="mt-4 rounded-2xl border border-slate-200 bg-white px-6"><PublicationEntry publication={publications[0]} /></div></div><div><h2 className="text-3xl font-semibold text-slate-950">News</h2><div className="mt-4"><NewsList items={newsItems} /></div></div></section></main>;
}

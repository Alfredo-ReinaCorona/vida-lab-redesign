import { PublicationEntry } from "@/components/publication-entry";
import { publications } from "@/content/publications";

export default function PublicationsPage() {
  const years = [...new Set(publications.map((publication) => publication.year))];
  return <main className="mx-auto max-w-6xl px-5 py-16"><h1 className="text-4xl font-semibold text-slate-950">Publications</h1><p className="mt-4 max-w-3xl leading-8 text-slate-700">Selected records with complete supplied metadata and public links. Entries are kept compact for scanning by year.</p>{years.map((year) => <section className="mt-10" key={year}><h2 className="text-2xl font-semibold text-slate-950">{year}</h2><div className="mt-4 rounded-2xl border border-slate-200 bg-white px-6">{publications.filter((publication) => publication.year === year).map((publication) => <PublicationEntry key={publication.title} publication={publication} />)}</div></section>)}</main>;
}

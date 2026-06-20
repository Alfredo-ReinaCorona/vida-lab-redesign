import type { Publication } from "@/content/publications";

export function PublicationEntry({ publication }: { publication: Publication }) {
  return <article className="border-b border-slate-200 py-6 last:border-b-0"><h3 className="text-lg font-semibold text-slate-950">{publication.title}</h3><p className="mt-2 text-sm text-slate-700">{publication.authors}</p><p className="mt-1 text-sm text-slate-600">{publication.venue} · {publication.year}</p>{publication.note ? <p className="mt-3 text-sm leading-6 text-slate-700">{publication.note}</p> : null}<div className="mt-3 flex flex-wrap gap-2">{publication.links.map((link) => <a key={link.label} className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold hover:bg-slate-50" href={link.href}>{link.label}</a>)}</div></article>;
}

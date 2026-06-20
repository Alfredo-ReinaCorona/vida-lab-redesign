import type { NewsItem } from "@/content/news";

export function NewsList({ items }: { items: NewsItem[] }) {
  return <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">{items.map((item) => <article className="p-5" key={`${item.date}-${item.title}`}><p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{item.date}</p><h3 className="mt-2 font-semibold text-slate-950">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-700">{item.summary}</p></article>)}</div>;
}

import type { Person } from "@/content/people";

export function PersonCard({ person }: { person: Person }) {
  return <article className="rounded-2xl border border-slate-200 bg-white p-6"><div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-lg font-semibold text-slate-700" aria-hidden="true">TBD</div><h3 className="mt-4 text-lg font-semibold text-slate-950">{person.name}</h3><p className="mt-1 text-sm font-medium text-red-900">{person.role}</p><p className="mt-3 text-sm leading-6 text-slate-700">{person.bio}</p></article>;
}

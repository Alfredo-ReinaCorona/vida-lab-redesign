import { PersonCard } from "@/components/person-card";
import { people } from "@/content/people";

const groups = ["Faculty director", "PhD students", "Visiting scholars", "Alumni"] as const;
export default function PeoplePage() {
  return <main className="mx-auto max-w-6xl px-5 py-16"><h1 className="text-4xl font-semibold text-slate-950">People</h1><p className="mt-4 max-w-3xl leading-8 text-slate-700">All entries are placeholders until names, titles, affiliations, and bios are verified.</p>{groups.map((group) => <section className="mt-10" key={group}><h2 className="text-2xl font-semibold text-slate-950">{group}</h2><div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{people.filter((person) => person.group === group).map((person) => <PersonCard key={person.name} person={person} />)}</div></section>)}</main>;
}

import { PersonCard } from "@/components/person-card";
import { people } from "@/content/people";

const groups = ["Faculty director", "Lab members"] as const;
export default function PeoplePage() {
  return <main className="mx-auto max-w-6xl px-5 py-16"><p className="text-sm font-semibold uppercase tracking-widest text-[var(--usc-cardinal)]">People</p><h1 className="mt-3 text-4xl font-semibold text-slate-950">CPS-VIDA Lab members</h1><p className="mt-4 max-w-3xl leading-8 text-slate-700">Profiles use supplied names, interests, bios, and links only. Role text is omitted when a current role was not supplied unambiguously.</p>{groups.map((group) => <section className="mt-10" key={group}><h2 className="border-l-4 border-[var(--usc-gold)] pl-4 text-2xl font-semibold text-slate-950">{group}</h2><div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{people.filter((person) => person.group === group).map((person) => <PersonCard key={person.name} person={person} />)}</div></section>)}</main>;
}

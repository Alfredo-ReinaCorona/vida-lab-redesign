import { PersonCard } from "@/components/person-card";
import { PersonSocialLinks } from "@/components/social-links";
import { people, type Person } from "@/content/people";

type PeopleSection = { title: string; groups: Person["group"][]; presentation?: "cards" | "list" };

const sections: PeopleSection[] = [
  { title: "Faculty director", groups: ["Faculty director"], presentation: "cards" },
  { title: "Ph.D. Students", groups: ["phd"], presentation: "cards" },
  { title: "M.S. Students", groups: ["ms"], presentation: "list" },
  { title: "Undergraduate Students", groups: ["undergrad"], presentation: "list" },
];

const groupNameOrder: Partial<Record<Person["group"], string[]>> = {
  phd: ["Merve Atasever", "Sheryl Paul", "Vidisha Kudalkar", "Yiqi “Nick” Zhao", "Sam Williams", "Iurii Biktairov", "Edward Kim", "Ryan Rubel"],
  "former-phd": ["Yuan Xia", "Anand Balakrishnan", "Aniruddh Puranic", "Navid Hashemi", "Xin Qin", "Sara Mohammadinejad"],
};

const alumniSections: PeopleSection[] = [{ title: "Former Ph.D. Students", groups: ["former-phd"], presentation: "list" }];

function getWebsite(person: Person) { return person.websiteUrl ?? person.website; }
function getPeopleForGroups(groups: Person["group"][]) {
  const groupPeople = people.filter((person) => groups.includes(person.group));
  const orderedNames = groupNameOrder[groups[0]];
  if (!orderedNames) return groupPeople;
  return [...groupPeople].sort((first, second) => (orderedNames.indexOf(first.name) === -1 ? Number.MAX_SAFE_INTEGER : orderedNames.indexOf(first.name)) - (orderedNames.indexOf(second.name) === -1 ? Number.MAX_SAFE_INTEGER : orderedNames.indexOf(second.name)));
}

function PeopleList({ section }: { section: PeopleSection }) {
  const sectionPeople = getPeopleForGroups(section.groups);
  if (!sectionPeople.length) return null;
  return (
    <section className="mt-10">
      <h2 className="border-l-4 border-[var(--usc-gold)] pl-4 text-2xl font-semibold text-slate-950">{section.title}</h2>
      <ul className="mt-5 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {sectionPeople.map((person) => {
          const website = getWebsite(person);
          return (
            <li key={person.slug} className="relative flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-slate-50 focus-within:bg-slate-50">
              {website ? <a aria-label={`Visit ${person.name}'s website`} className="absolute inset-0 z-10 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--usc-cardinal)]" href={website} rel="noreferrer" target="_blank" /> : null}
              <span className="font-semibold text-slate-950">{person.name}</span>
              <PersonSocialLinks person={person} includeWebsite className="relative z-20 shrink-0" />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function PeopleGrid({ section }: { section: PeopleSection }) {
  if (section.presentation === "list") return <PeopleList section={section} />;
  const sectionPeople = getPeopleForGroups(section.groups);
  if (!sectionPeople.length) return null;
  return <section className="mt-10"><h2 className="border-l-4 border-[var(--usc-gold)] pl-4 text-2xl font-semibold text-slate-950">{section.title}</h2><div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{sectionPeople.map((person) => <PersonCard key={person.slug} person={person} />)}</div></section>;
}

export default function PeoplePage() {
  const hasAlumni = alumniSections.some((section) => getPeopleForGroups(section.groups).length > 0);
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-[var(--usc-cardinal)]">People</p>
      <h1 className="mt-3 text-4xl font-semibold text-slate-950">CPS-VIDA Lab Members</h1>
      {sections.map((section) => <PeopleGrid key={section.title} section={section} />)}
      {hasAlumni ? <section className="mt-12" aria-labelledby="lab-alumni-title"><h2 id="lab-alumni-title" className="text-3xl font-semibold text-slate-950">Lab Alumni</h2>{alumniSections.map((section) => <PeopleGrid key={section.title} section={section} />)}</section> : null}
    </main>
  );
}

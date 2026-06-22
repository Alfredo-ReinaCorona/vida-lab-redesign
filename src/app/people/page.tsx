import { PersonCard } from "@/components/person-card";
import { people, type Person } from "@/content/people";

type PeopleSection = {
  title: string;
  groups: Person["group"][];
};

const sections: PeopleSection[] = [
  { title: "Faculty director", groups: ["Faculty director"] },
  { title: "Ph.D. Students", groups: ["phd"] },
  { title: "M.S. Students", groups: ["ms"] },
  { title: "Undergraduate Students", groups: ["undergrad"] },
];

const groupNameOrder: Partial<Record<Person["group"], string[]>> = {
  phd: [
    "Merve Atasever",
    "Sheryl Paul",
    "Vidisha Kudalkar",
    "Yiqi “Nick” Zhao",
    "Sam Williams",
    "Iurii Biktairov",
    "Edward Kim",
    "Ryan Rubel",
  ],
  "former-phd": [
    "Yuan Xia",
    "Anand Balakrishnan",
    "Aniruddh Puranic",
    "Navid Hashemi",
    "Xin Qin",
    "Sara Mohammadinejad",
  ],
};

const alumniSections: PeopleSection[] = [
  { title: "Former Ph.D. Students", groups: ["former-phd"] },
];

function getPeopleForGroups(groups: Person["group"][]) {
  const groupPeople = people.filter((person) => groups.includes(person.group));
  const [group] = groups;
  const orderedNames = groupNameOrder[group];

  if (!orderedNames) return groupPeople;

  return [...groupPeople].sort((first, second) => {
    const firstIndex = orderedNames.indexOf(first.name);
    const secondIndex = orderedNames.indexOf(second.name);
    return (firstIndex === -1 ? Number.MAX_SAFE_INTEGER : firstIndex) - (secondIndex === -1 ? Number.MAX_SAFE_INTEGER : secondIndex);
  });
}

function PeopleGrid({ section }: { section: PeopleSection }) {
  const sectionPeople = getPeopleForGroups(section.groups);

  if (!sectionPeople.length) return null;

  return (
    <section className="mt-10">
      <h2 className="border-l-4 border-[var(--usc-gold)] pl-4 text-2xl font-semibold text-slate-950">{section.title}</h2>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sectionPeople.map((person) => (
          <PersonCard key={person.slug} person={person} />
        ))}
      </div>
    </section>
  );
}

export default function PeoplePage() {
  const hasAlumni = alumniSections.some((section) => getPeopleForGroups(section.groups).length > 0);

  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-[var(--usc-cardinal)]">People</p>
      <h1 className="mt-3 text-4xl font-semibold text-slate-950">CPS-VIDA Lab members</h1>
      <p className="mt-4 max-w-3xl leading-8 text-slate-700">
        Profiles use supplied names, interests, bios, and links only. Role text is omitted when a current role was not supplied unambiguously.
      </p>
      {sections.map((section) => (
        <PeopleGrid key={section.title} section={section} />
      ))}
      {hasAlumni ? (
        <section className="mt-12" aria-labelledby="lab-alumni-title">
          <h2 id="lab-alumni-title" className="text-3xl font-semibold text-slate-950">Lab Alumni</h2>
          {alumniSections.map((section) => (
            <PeopleGrid key={section.title} section={section} />
          ))}
        </section>
      ) : null}
    </main>
  );
}

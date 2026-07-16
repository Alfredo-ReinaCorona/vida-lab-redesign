import Image from "next/image";
import { PersonCard, getInitials } from "@/components/person-card";
import { PersonSocialLinks } from "@/components/social-links";
import { withBasePath } from "@/lib/paths";
import { people, type Person } from "@/content/people";

type PeopleSection = {
  title: string;
  groups: Person["group"][];
  presentation?: "cards" | "list";
};

const sections: PeopleSection[] = [
  {
    title: "Faculty Director",
    groups: ["Faculty director"],
    presentation: "cards",
  },
  { title: "Ph.D. Students", groups: ["phd"], presentation: "cards" },
  { title: "M.S. Students", groups: ["ms"], presentation: "list" },
  {
    title: "Undergraduate Students",
    groups: ["undergrad"],
    presentation: "list",
  },
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
  {
    title: "Former Ph.D. Students",
    groups: ["former-phd"],
    presentation: "list",
  },
  {
    title: "Former M.S. Students",
    groups: ["former-ms"],
    presentation: "list",
  },
];

function getWebsite(person: Person) {
  return person.websiteUrl ?? person.website;
}
function getPeopleForGroups(groups: Person["group"][]) {
  const groupPeople = people.filter((person) => groups.includes(person.group));
  const orderedNames = groupNameOrder[groups[0]];
  if (!orderedNames) return groupPeople;
  return [...groupPeople].sort(
    (first, second) =>
      (orderedNames.indexOf(first.name) === -1
        ? Number.MAX_SAFE_INTEGER
        : orderedNames.indexOf(first.name)) -
      (orderedNames.indexOf(second.name) === -1
        ? Number.MAX_SAFE_INTEGER
        : orderedNames.indexOf(second.name)),
  );
}

function PersonRosterImage({ person }: { person: Person }) {
  if (person.imageSrc) {
    return (
      <Image
        src={withBasePath(person.imageSrc)}
        alt={`${person.name} headshot`}
        width={72}
        height={72}
        className="h-16 w-16 shrink-0 rounded-lg object-cover sm:h-[72px] sm:w-[72px]"
        style={
          person.imagePosition
            ? { objectPosition: person.imagePosition }
            : undefined
        }
      />
    );
  }

  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-[var(--profile-tile)] text-lg font-semibold text-[var(--usc-cardinal)] sm:h-[72px] sm:w-[72px]">
      {getInitials(person.name)}
    </div>
  );
}

function PeopleList({ section }: { section: PeopleSection }) {
  const sectionPeople = getPeopleForGroups(section.groups);
  if (!sectionPeople.length) return null;
  return (
    <section className="mt-10">
      <h2 className="border-l-4 border-[var(--usc-gold)] pl-4 text-2xl font-semibold text-slate-950">
        {section.title}
      </h2>
      <ul className="mt-6 space-y-6 sm:space-y-7">
        {sectionPeople.map((person) => {
          const website = getWebsite(person);
          return (
            <li key={person.slug}>
              <article className="group relative flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300 hover:shadow-md sm:gap-5 sm:p-5">
                {website ? (
                  <a
                    aria-label={`Visit ${person.name}'s website`}
                    className="absolute inset-0 z-10 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--usc-cardinal)]"
                    href={website}
                    rel="noreferrer"
                    target="_blank"
                  />
                ) : null}
                <PersonRosterImage person={person} />
                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <h3 className="text-base font-semibold leading-6 text-slate-950 sm:text-lg">
                      {person.name}
                    </h3>
                    <PersonSocialLinks
                      person={person}
                      includeWebsite
                      className="relative z-20"
                      compact
                    />
                  </div>
                  {person.listSubtitle ? (
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {person.listSubtitle}
                    </p>
                  ) : null}
                </div>
              </article>
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
  return (
    <section className="mt-10">
      <h2 className="border-l-4 border-[var(--usc-gold)] pl-4 text-2xl font-semibold text-slate-950">
        {section.title}
      </h2>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sectionPeople.map((person) => (
          <PersonCard key={person.slug} person={person} />
        ))}
      </div>
    </section>
  );
}

export default function PeoplePage() {
  const hasAlumni = alumniSections.some(
    (section) => getPeopleForGroups(section.groups).length > 0,
  );
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-[var(--usc-cardinal)]">
        People
      </p>
      <h1 className="mt-3 text-4xl font-semibold text-slate-950">
        CPS-VIDA Lab Members
      </h1>
      {sections.map((section) => (
        <PeopleGrid key={section.title} section={section} />
      ))}
      {hasAlumni ? (
        <section className="mt-12" aria-labelledby="lab-alumni-title">
          <h2
            id="lab-alumni-title"
            className="text-3xl font-semibold text-slate-950"
          >
            Lab Alumni
          </h2>
          {alumniSections.map((section) => (
            <PeopleGrid key={section.title} section={section} />
          ))}
        </section>
      ) : null}
    </main>
  );
}

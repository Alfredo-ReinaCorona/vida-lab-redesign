import Image from "next/image";
import Link from "next/link";
import type { Person } from "@/content/people";
import { PersonSocialLinks } from "@/components/social-links";
import { withBasePath } from "@/lib/paths";

export function getInitials(name: string) {
  return name.replace(/[“”]/g, "").split(/\s+/).filter(Boolean).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}

export function getPersonRole(person: Person) { return person.displayRole ?? person.role; }
function websiteFor(person: Person) { return person.websiteUrl ?? person.website; }

function RoleBlock({ person }: { person: Person }) {
  if (person.slug === "jyotirmoy-deshmukh") {
    return <div className="mt-1 space-y-0.5 text-sm font-medium text-[var(--usc-cardinal)]"><p>Associate Professor, Department of Computer Science</p><p>Director of CPS-VIDA Lab</p><p>Co-director of the Center for Autonomy and AI</p></div>;
  }
  const role = getPersonRole(person);
  return role ? <p className="mt-1 text-sm font-medium text-[var(--usc-cardinal)]">{role}</p> : null;
}

export function PersonCard({ person }: { person: Person }) {
  const isInternalProfile = person.slug === "jyotirmoy-deshmukh";
  const website = websiteFor(person);

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--usc-cardinal)] hover:shadow-md focus-within:border-[var(--usc-cardinal)]">
      {isInternalProfile ? (
        <Link href={`/people/${person.slug}/`} className="absolute inset-0 z-10 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--usc-cardinal)]" aria-label={`View ${person.name}'s profile`} />
      ) : website ? (
        <a href={website} className="absolute inset-0 z-10 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--usc-cardinal)]" aria-label={`Visit ${person.name}'s website`} rel="noreferrer" target="_blank" />
      ) : null}
      {person.imageSrc ? <Image src={withBasePath(person.imageSrc)} alt={`${person.name} headshot`} width={64} height={64} className="h-16 w-16 rounded-xl border border-[var(--usc-gold)] object-cover transition group-hover:border-[var(--usc-cardinal)]" style={person.imagePosition ? { objectPosition: person.imagePosition } : undefined} /> : <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl border border-[var(--usc-gold)] bg-[var(--profile-tile)] text-lg font-semibold text-[var(--usc-cardinal)] transition group-hover:border-[var(--usc-cardinal)]">{getInitials(person.name)}</div>}
      <h3 className="mt-4 text-lg font-semibold text-slate-950">{person.name}</h3>
      <RoleBlock person={person} />
      <PersonSocialLinks person={person} className="relative z-20 mt-3" />
      {person.cardSummary ? <p className="mt-3 text-sm leading-6 text-slate-700">{person.cardSummary}</p> : null}
      {person.interests.length && person.slug !== "jyotirmoy-deshmukh" ? <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${person.name} research interests`}>{person.interests.slice(0, 5).map((interest) => <li className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700" key={interest}>{interest}</li>)}</ul> : null}
    </article>
  );
}

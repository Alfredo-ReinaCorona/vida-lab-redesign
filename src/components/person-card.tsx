import Link from "next/link";
import type { Person } from "@/content/people";

export function getInitials(name: string) {
  return name
    .replace(/[“”]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function PersonCard({ person }: { person: Person }) {
  return (
    <Link
      href={`/people/${person.slug}/`}
      className="group block h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--usc-cardinal)] hover:shadow-md focus-visible:border-[var(--usc-cardinal)]"
      aria-label={`View ${person.name}'s profile`}
    >
      <article className="flex h-full flex-col">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-[var(--usc-gold)] bg-[var(--profile-tile)] text-lg font-semibold text-[var(--usc-cardinal)]" aria-hidden="true">
          {getInitials(person.name)}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-slate-950">{person.name}</h3>
        {person.role ? <p className="mt-1 text-sm font-medium text-[var(--usc-cardinal)]">{person.role}</p> : null}
        <p className="mt-3 text-sm leading-6 text-slate-700">{person.cardSummary}</p>
        {person.interests.length ? (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${person.name} research interests`}>
            {person.interests.slice(0, 5).map((interest) => (
              <li className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700" key={interest}>{interest}</li>
            ))}
          </ul>
        ) : null}
        <span className="mt-auto pt-5 text-sm font-semibold text-[var(--usc-cardinal)] underline-offset-4 group-hover:underline">
          View profile <span aria-hidden="true">→</span>
        </span>
      </article>
    </Link>
  );
}

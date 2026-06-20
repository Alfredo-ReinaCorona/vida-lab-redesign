import Link from "next/link";
import { notFound } from "next/navigation";
import { getInitials } from "@/components/person-card";
import { PersonSocialLinks } from "@/components/social-links";
import { getPersonBySlug, people } from "@/content/people";

export function generateStaticParams() {
  return people.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = getPersonBySlug(slug);
  return {
    title: person ? `${person.name} | CPS-VIDA Lab` : "CPS-VIDA Lab profile",
  };
}

export default async function PersonProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = getPersonBySlug(slug);

  if (!person) notFound();

  return (
    <main className="mx-auto max-w-5xl px-5 py-12">
      <Link className="text-sm font-semibold text-[var(--usc-cardinal)] underline-offset-4 hover:underline" href="/people/">
        ← Back to People
      </Link>
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="grid gap-8 md:grid-cols-[12rem_1fr]">
          <aside>
            <div className="flex h-32 w-32 items-center justify-center rounded-3xl border border-[var(--usc-gold)] bg-[var(--profile-tile)] text-4xl font-semibold text-[var(--usc-cardinal)]" aria-hidden="true">
              {getInitials(person.name)}
            </div>
            <PersonSocialLinks person={person} className="mt-4" />
          </aside>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--usc-cardinal)]">Profile</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">{person.name}</h1>
            {person.role ? <p className="mt-3 text-base font-medium leading-7 text-[var(--usc-cardinal)]">{person.role}</p> : null}
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
              {(person.biography?.length ? person.biography : [person.cardSummary]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="border-l-4 border-[var(--usc-gold)] pl-4 text-2xl font-semibold text-slate-950">Research interests</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {person.interests.map((interest) => (
              <li className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700" key={interest}>{interest}</li>
            ))}
          </ul>
          {person.website ? (
            <div className="mt-6 border-t border-slate-200 pt-5">
              <a className="font-semibold text-[var(--usc-cardinal)] underline-offset-4 hover:underline" href={person.website}>
                Personal website <span aria-hidden="true">↗</span>
              </a>
            </div>
          ) : null}
        </section>

        {person.selectedWorks?.length ? (
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="border-l-4 border-[var(--usc-gold)] pl-4 text-2xl font-semibold text-slate-950">Selected work</h2>
            <ul className="mt-5 divide-y divide-slate-200">
              {person.selectedWorks.map((work, index) => (
                <li className="py-4 first:pt-0 last:pb-0" key={`${work.title}-${index}`}>
                  <h3 className="font-semibold leading-7 text-slate-950">{work.title}</h3>
                  {[work.venue, work.year].filter(Boolean).length ? <p className="mt-1 text-sm text-slate-600">{[work.venue, work.year].filter(Boolean).join(" · ")}</p> : null}
                  {work.links?.length ? (
                    <div className="mt-3 flex flex-wrap gap-3">
                      {work.links.map((link) => (
                        <a className="text-sm font-semibold text-[var(--usc-cardinal)] underline-offset-4 hover:underline" href={link.href} key={`${link.label}-${link.href}`}>
                          {link.label} <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </main>
  );
}

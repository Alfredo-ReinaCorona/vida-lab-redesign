import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInitials, getPersonRole } from "@/components/person-card";
import { PersonSocialLinks } from "@/components/social-links";
import { getPersonBySlug, people } from "@/content/people";
import { withBasePath } from "@/lib/paths";

const selectedWorkProfileSlugs = new Set([
  "vidisha-kudalkar",
  "iurii-biktairov",
  "edward-kim",
  "ryan-rubel",
  "aniruddh-puranic",
  "sara-mohammadinejad",
  "mihir-nitin-kulkarni",
  "qingpei-li",
]);

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

  const role = getPersonRole(person);
  const hasNarrative = Boolean(person.biography?.length || person.cardSummary);
  const profileWebsiteUrl = person.websiteUrl ?? person.website;
  const interests = person.researchInterests ?? person.interests;
  const selectedWorks = selectedWorkProfileSlugs.has(person.slug) ? (person.selectedWork ?? person.selectedWorks) : undefined;

  return (
    <main className="mx-auto max-w-5xl px-5 py-12">
      <Link className="text-sm font-semibold text-[var(--usc-cardinal)] underline-offset-4 hover:underline" href="/people/">
        ← Back to People
      </Link>
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="grid gap-8 md:grid-cols-[12rem_1fr]">
          <aside>
            {person.imageSrc ? (
              <Image
                src={withBasePath(person.imageSrc)}
                alt={`${person.name} headshot`}
                width={128}
                height={128}
                className="h-32 w-32 rounded-3xl border border-[var(--usc-gold)] object-cover"
                style={person.imagePosition ? { objectPosition: person.imagePosition } : undefined}
              />
            ) : (
              <div className="flex h-32 w-32 items-center justify-center rounded-3xl border border-[var(--usc-gold)] bg-[var(--profile-tile)] text-4xl font-semibold text-[var(--usc-cardinal)]" aria-hidden="true">
                {getInitials(person.name)}
              </div>
            )}
            <PersonSocialLinks person={person} className="mt-4" />
          </aside>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--usc-cardinal)]">Profile</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">{person.name}</h1>
            {role ? <p className="mt-3 text-base font-medium leading-7 text-[var(--usc-cardinal)]">{role}</p> : null}
            {hasNarrative ? (
              <div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
                {(person.biography?.length ? person.biography : [person.cardSummary]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
        {interests.length || profileWebsiteUrl ? (
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {interests.length ? (
              <>
                <h2 className="border-l-4 border-[var(--usc-gold)] pl-4 text-2xl font-semibold text-slate-950">Research interests</h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <li className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700" key={interest}>{interest}</li>
                  ))}
                </ul>
              </>
            ) : null}
            {profileWebsiteUrl ? (
              <div className={interests.length ? "mt-6 border-t border-slate-200 pt-5" : ""}>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Website</h2>
                <a
                  aria-label={`Visit ${person.name}’s website.`}
                  className="mt-2 inline-block font-semibold text-[var(--usc-cardinal)] underline-offset-4 hover:underline"
                  href={profileWebsiteUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Personal website <span aria-hidden="true">↗</span>
                </a>
              </div>
            ) : null}
          </section>
        ) : null}

        {selectedWorks?.length ? (
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="border-l-4 border-[var(--usc-gold)] pl-4 text-2xl font-semibold text-slate-950">Selected work</h2>
            <ol className="mt-5 divide-y divide-slate-200">
              {selectedWorks.map((work, index) => (
                <li className="grid grid-cols-[2rem_1fr] gap-3 py-4 first:pt-0 last:pb-0" key={`${work.title}-${index}`}>
                  <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--usc-gold)] bg-[var(--profile-tile)] text-xs font-semibold tabular-nums text-[var(--usc-cardinal)]" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold leading-7 text-slate-950">{work.title}</h3>
                    {[work.venue, work.year].filter(Boolean).length ? <p className="mt-1 text-sm font-medium text-slate-600">{[work.venue, work.year].filter(Boolean).join(" · ")}</p> : null}
                    {work.links?.length ? (
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                        {work.links.map((link) => (
                          <a className="text-sm font-semibold text-[var(--usc-cardinal)] underline-offset-4 hover:underline" href={link.href} key={`${link.label}-${link.href}`} rel="noreferrer" target="_blank">
                            {link.label} <span aria-hidden="true">↗</span>
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ) : null}
      </div>
    </main>
  );
}

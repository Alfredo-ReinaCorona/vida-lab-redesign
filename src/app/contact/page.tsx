import { contactPage } from "@/content/contact";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--usc-cardinal)]">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          {contactPage.title}
        </h1>
        <div className="mt-8 border-y border-[var(--usc-gold)]/50 py-6">
          <p className="leading-7 text-slate-700">{contactPage.intro}</p>
          <p className="mt-4 leading-7 text-slate-800">
            <strong>{contactPage.emailLabel}</strong> {contactPage.emailPlaceholder}
          </p>
        </div>

        <div className="divide-y divide-slate-200">
          {contactPage.sections.map((section) => (
            <section className="py-8" key={section.title}>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {section.title}
              </h2>
              {"body" in section ? (
                <p className="mt-4 leading-7 text-slate-700">{section.body}</p>
              ) : (
                <p className="mt-4 leading-7 text-slate-700">
                  {section.bodyStart}
                  <a
                    className="font-medium text-[var(--usc-cardinal)] underline decoration-[var(--usc-gold)] decoration-2 underline-offset-4 hover:text-slate-950"
                    href={section.csLink.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {section.csLink.label}
                  </a>
                  {section.bodyMiddle}
                  <a
                    className="font-medium text-[var(--usc-cardinal)] underline decoration-[var(--usc-gold)] decoration-2 underline-offset-4 hover:text-slate-950"
                    href={section.eceLink.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {section.eceLink.label}
                  </a>
                  {section.bodyEnd}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

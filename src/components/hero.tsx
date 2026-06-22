import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--usc-cardinal)]">Verification • Intelligence • Design • Analysis</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">Autonomous Cyber-Physical Systems</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">CPS-VIDA Lab develops rigorous foundations for autonomy at the intersection of formal methods, control, artificial intelligence, and cyber-physical systems.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="rounded-full bg-[var(--usc-cardinal)] px-5 py-3 text-sm font-semibold text-white hover:bg-red-950" href="/research/">Explore research</Link>
          <a className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white" href="https://www.cs.usc.edu/" rel="noreferrer" target="_blank">USC Computer Science</a>
        </div>
      </div>
      <div className="relative min-h-80 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" aria-label="Abstract technical system diagram">
        <div className="absolute inset-0 bg-[linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative grid h-full place-items-center">
          <svg viewBox="0 0 420 300" role="img" aria-labelledby="hero-diagram-title" className="w-full max-w-md">
            <title id="hero-diagram-title">Abstract network of verified system states</title>
            <g fill="none" stroke="#990000" strokeWidth="3"><path d="M70 220 C140 95 240 250 340 80"/><path d="M90 80 L180 150 L260 105 L340 205"/></g>
            <g fill="#fff" stroke="#172033" strokeWidth="3">{[[70,220],[90,80],[180,150],[260,105],[340,80],[340,205]].map(([cx,cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="18" />)}</g>
            <g fill="#172033"><rect x="135" y="34" width="150" height="34" rx="17"/><rect x="120" y="238" width="180" height="34" rx="17"/></g>
            <g fill="#fff" fontSize="13" fontFamily="Arial"><text x="157" y="56">specification</text><text x="157" y="260">verification</text></g>
          </svg>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/paths";

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
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
        <Image
          src={withBasePath("/images/lab-group.jpg")}
          alt="CPS-VIDA Lab group photo."
          width={960}
          height={720}
          priority
          className="h-full w-full rounded-2xl object-contain"
        />
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { experiences } from "@/data/experiences";

type ExperienceDetailPageProps = {
  favoriteIds?: number[];
  toggleFavorite?: (experienceId: number) => void;
};

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-5 w-5 transition ${filled ? "fill-rose-500 text-rose-500" : "fill-transparent text-slate-700"}`}
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 21s-6.716-4.385-9.192-8.217C.642 9.43 1.77 5.25 5.712 4.192A5.35 5.35 0 0 1 12 6.224a5.35 5.35 0 0 1 6.288-2.032c3.942 1.058 5.07 5.238 2.904 8.591C18.716 16.615 12 21 12 21Z" />
    </svg>
  );
}

export default function ExperienceDetailPage({
  favoriteIds = [],
  toggleFavorite = () => undefined,
}: ExperienceDetailPageProps) {
  const params = useParams<{ id: string }>();
  const experienceId = Number(params.id);
  const experience = experiences.find((item) => item.id === experienceId);

  if (!experience) {
    return (
      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-6 px-6 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-strong">Experience not found</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">That itinerary does not exist.</h1>
        <Link
          href="/experiences"
          className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-strong"
        >
          Back to experiences
        </Link>
      </section>
    );
  }

  const isFavorite = favoriteIds.includes(experience.id);

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 sm:px-10 lg:px-12">
      <Link href="/experiences" className="text-sm font-medium text-brand-strong transition hover:text-brand">
        ← Back to all experiences
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] bg-brand p-8 text-white shadow-xl shadow-brand/20 sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-white/70">{experience.destination}</p>
              <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                {experience.title}
              </h1>
            </div>
            <button
              type="button"
              onClick={() => toggleFavorite(experience.id)}
              className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/18"
            >
              <HeartIcon filled={isFavorite} />
              {isFavorite ? "Saved" : "Save"}
            </button>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/85">{experience.description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-4">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">Category</p>
              <p className="mt-2 font-semibold">{experience.category}</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">Duration</p>
              <p className="mt-2 font-semibold">{experience.durationDays} days</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">Price</p>
              <p className="mt-2 font-semibold">${experience.price}</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">Rating</p>
              <p className="mt-2 font-semibold">{experience.rating}/5</p>
            </div>
          </div>
        </div>

        <aside className="space-y-6 rounded-[2rem] border border-border bg-white/85 p-8 shadow-lg shadow-slate-900/5 backdrop-blur">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Trip details</p>
            <dl className="mt-4 space-y-4 text-sm text-slate-700">
              <div>
                <dt className="text-slate-500">Best season</dt>
                <dd className="mt-1 font-semibold text-slate-900">{experience.season}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Group size</dt>
                <dd className="mt-1 font-semibold text-slate-900">{experience.groupSize}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Summary</dt>
                <dd className="mt-1 leading-7">{experience.summary}</dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Highlights</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="rounded-2xl bg-slate-50 px-4 py-3">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

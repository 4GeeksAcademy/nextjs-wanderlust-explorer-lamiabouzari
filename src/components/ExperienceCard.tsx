"use client";

import Link from "next/link";
import { Experience } from "@/types/experience";

type ExperienceCardProps = {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (experienceId: number) => void;
};

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-5 w-5 transition ${filled ? "fill-rose-500 text-rose-500" : "fill-transparent text-slate-500"}`}
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 21s-6.716-4.385-9.192-8.217C.642 9.43 1.77 5.25 5.712 4.192A5.35 5.35 0 0 1 12 6.224a5.35 5.35 0 0 1 6.288-2.032c3.942 1.058 5.07 5.238 2.904 8.591C18.716 16.615 12 21 12 21Z" />
    </svg>
  );
}

export function ExperienceCard({ experience, isFavorite, onToggleFavorite }: ExperienceCardProps) {
  return (
    <article className="group rounded-3xl border border-border bg-surface-strong p-5 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-brand-strong">{experience.destination}</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
            <Link href={`/experiences/${experience.id}`} className="transition group-hover:text-brand">
              {experience.title}
            </Link>
          </h2>
        </div>
        <button
          type="button"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          onClick={() => onToggleFavorite(experience.id)}
          className={`rounded-full border px-3 py-3 transition ${
            isFavorite
              ? "border-rose-200 bg-rose-50"
              : "border-slate-200 bg-white hover:border-brand/40 hover:bg-brand/5"
          }`}
        >
          <HeartIcon filled={isFavorite} />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        <span className="rounded-full bg-slate-100 px-3 py-1">{experience.category}</span>
        <span className="rounded-full bg-slate-100 px-3 py-1">{experience.season}</span>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-600">{experience.summary}</p>

      <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Duration</p>
          <p className="mt-1 font-semibold">{experience.durationDays} days</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Price</p>
          <p className="mt-1 font-semibold">${experience.price}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Rating</p>
          <p className="mt-1 font-semibold">{experience.rating}/5</p>
        </div>
      </div>
    </article>
  );
}

"use client";

import Link from "next/link";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import { experiences } from "@/data/experiences";

type FavoritesPageProps = {
  favoriteIds?: number[];
  toggleFavorite?: (experienceId: number) => void;
};

export default function FavoritesPage({
  favoriteIds = [],
  toggleFavorite = () => undefined,
}: FavoritesPageProps) {
  const favoriteExperiences = experiences.filter((experience) => favoriteIds.includes(experience.id));

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 sm:px-10 lg:px-12">
      <div className="flex flex-col gap-4 rounded-[2rem] bg-white/85 p-8 shadow-lg shadow-slate-900/5 backdrop-blur lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-strong">Favorites</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Your saved experiences</h1>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            Keep a shortlist of the itineraries worth comparing before you decide where to go next.
          </p>
        </div>
        <Link
          href="/experiences"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand"
        >
          Add more experiences
        </Link>
      </div>

      <ExperienceGrid
        experiences={favoriteExperiences}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
        emptyDescription="You have not saved anything yet. Start in the explorer and tap the heart icon on any experience card."
      />
    </section>
  );
}

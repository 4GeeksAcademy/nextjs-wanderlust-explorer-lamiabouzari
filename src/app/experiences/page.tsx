"use client";

import { Suspense } from "react";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import { FilterBar } from "@/components/FilterBar";
import { SearchBar } from "@/components/SearchBar";
import { experiences } from "@/data/experiences";
import { useExperiences } from "@/hooks/useExperiences";

type ExperiencesPageProps = {
  favoriteIds?: number[];
  toggleFavorite?: (experienceId: number) => void;
};

function ExperiencesPageContent({
  favoriteIds = [],
  toggleFavorite = () => undefined,
}: ExperiencesPageProps) {
  const { categories, destinations, filteredExperiences, filters, setCategory, setDestination, setSearch } =
    useExperiences(experiences);

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 sm:px-10 lg:px-12">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-strong">Explorer</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Browse every experience</h1>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            Search with case-insensitive regex matching, refine by category and destination, and save any experience that stands out.
          </p>
        </div>
        <div className="rounded-2xl bg-white/80 px-5 py-4 shadow-lg shadow-slate-900/5 backdrop-blur">
          <p className="text-sm text-slate-500">Showing</p>
          <p className="text-2xl font-semibold text-slate-900">{filteredExperiences.length} experiences</p>
        </div>
      </div>

      <div className="grid gap-4 rounded-3xl border border-border bg-white/80 p-5 shadow-lg shadow-slate-900/5 backdrop-blur lg:grid-cols-[1.1fr_1.4fr]">
        <SearchBar value={filters.search} onChange={setSearch} />
        <FilterBar
          categories={categories}
          destinations={destinations}
          selectedCategory={filters.category}
          selectedDestination={filters.destination}
          onCategoryChange={setCategory}
          onDestinationChange={setDestination}
        />
      </div>

      <ExperienceGrid
        experiences={filteredExperiences}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
      />
    </section>
  );
}

export default function ExperiencesPage(props: ExperiencesPageProps) {
  return (
    <Suspense
      fallback={
        <section className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-6 py-12 sm:px-10 lg:px-12">
          <div className="rounded-3xl border border-border bg-white/80 px-6 py-8 text-sm text-slate-600 shadow-lg shadow-slate-900/5 backdrop-blur">
            Loading experiences...
          </div>
        </section>
      }
    >
      <ExperiencesPageContent {...props} />
    </Suspense>
  );
}

"use client";

import { ExperienceCard } from "@/components/ExperienceCard";
import { Experience } from "@/types/experience";

type ExperienceGridProps = {
  experiences: Experience[];
  favoriteIds: number[];
  onToggleFavorite: (experienceId: number) => void;
  emptyTitle?: string;
  emptyDescription?: string;
};

export function ExperienceGrid({
  experiences,
  favoriteIds,
  onToggleFavorite,
  emptyTitle = "No results found",
  emptyDescription = "Adjust your search or filters to discover more experiences.",
}: ExperienceGridProps) {
  if (!experiences.length) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-10 text-center">
        <h2 className="text-2xl font-semibold text-slate-900">{emptyTitle}</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">{emptyDescription}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          isFavorite={favoriteIds.includes(experience.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

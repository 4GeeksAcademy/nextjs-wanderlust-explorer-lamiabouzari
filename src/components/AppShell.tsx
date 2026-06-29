"use client";

import { cloneElement, isValidElement, useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";

type SharedPageProps = {
  favoriteIds?: number[];
  toggleFavorite?: (experienceId: number) => void;
  favoriteCount?: number;
};

function injectProps(children: React.ReactNode, props: SharedPageProps) {
  if (!isValidElement(children)) {
    return children;
  }

  return cloneElement(children, props);
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  useEffect(() => {
    window.localStorage.setItem("wanderlust-favorite-ids", JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  function toggleFavorite(experienceId: number) {
    setFavoriteIds((currentFavorites) =>
      currentFavorites.includes(experienceId)
        ? currentFavorites.filter((id) => id !== experienceId)
        : [...currentFavorites, experienceId]
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar favoriteCount={favoriteIds.length} />
      <main className="flex flex-1">
        {injectProps(children, {
          favoriteIds,
          toggleFavorite,
          favoriteCount: favoriteIds.length,
        })}
      </main>
    </div>
  );
}

"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Experience } from "@/types/experience";

type ExperienceFilters = {
  search: string;
  category: string;
  destination: string;
};

function createSearchRegex(search: string) {
  if (!search) {
    return null;
  }

  try {
    return new RegExp(search, "i");
  } catch {
    const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(escaped, "i");
  }
}

export function useExperiences(allExperiences: Experience[]) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters: ExperienceFilters = {
    search: searchParams.get("search") ?? "",
    category: searchParams.get("category") ?? "",
    destination: searchParams.get("destination") ?? "",
  };

  const categories = Array.from(new Set(allExperiences.map((experience) => experience.category))).sort();
  const destinations = Array.from(new Set(allExperiences.map((experience) => experience.destination))).sort();

  const searchRegex = createSearchRegex(filters.search);
  const filteredExperiences = allExperiences.filter((experience) => {
    const matchesSearch = searchRegex ? searchRegex.test(experience.title) : true;
    const matchesCategory = filters.category ? experience.category === filters.category : true;
    const matchesDestination = filters.destination ? experience.destination === filters.destination : true;

    return matchesSearch && matchesCategory && matchesDestination;
  });

  function updateFilter(key: keyof ExperienceFilters, value: string) {
    const nextFilters = { ...filters, [key]: value };

    const params = new URLSearchParams(searchParams.toString());

    Object.entries(nextFilters).forEach(([filterKey, filterValue]) => {
      if (filterValue) {
        params.set(filterKey, filterValue);
      } else {
        params.delete(filterKey);
      }
    });

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return {
    categories,
    destinations,
    filteredExperiences,
    filters,
    setCategory: (value: string) => updateFilter("category", value),
    setDestination: (value: string) => updateFilter("destination", value),
    setSearch: (value: string) => updateFilter("search", value),
  };
}

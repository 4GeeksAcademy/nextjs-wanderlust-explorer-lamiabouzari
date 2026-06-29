"use client";

type FilterBarProps = {
  categories: string[];
  destinations: string[];
  selectedCategory: string;
  selectedDestination: string;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
};

export function FilterBar({
  categories,
  destinations,
  selectedCategory,
  selectedDestination,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
        Category
        <select
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
        >
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
        Destination
        <select
          value={selectedDestination}
          onChange={(event) => onDestinationChange(event.target.value)}
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
        >
          <option value="">All destinations</option>
          {destinations.map((destination) => (
            <option key={destination} value={destination}>
              {destination}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

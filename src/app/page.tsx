import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-sm font-medium text-brand-strong">
            100 handpicked adventures across the globe
          </span>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              Find the trip that feels like a story worth telling.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Browse immersive food tours, mountain escapes, cultural deep-dives, and wellness retreats. Every experience is searchable, filterable, and ready to save to your favorites.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/experiences"
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-strong"
            >
              Explore experiences
            </Link>
            <Link
              href="/favorites"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand"
            >
              View favorites
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-brand p-6 text-white shadow-lg shadow-brand/20 sm:translate-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-white/75">Featured mood</p>
            <h2 className="mt-3 text-2xl font-semibold">Slow travel with depth</h2>
            <p className="mt-3 text-sm leading-7 text-white/85">
              Plan around local rituals, signature meals, and small-group guides instead of generic sightseeing.
            </p>
          </div>
          <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg shadow-slate-900/5 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Popular themes</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>Adventure treks and desert nights</li>
              <li>Street food tastings and market walks</li>
              <li>Creative retreats by the sea</li>
              <li>Nature escapes with guided wellness</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg shadow-slate-900/5 backdrop-blur sm:col-span-2">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Why this app</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">A focused explorer built for fast comparisons</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-600">
                Filter by category and destination, search titles with regex matching, then jump into each experience without losing your place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

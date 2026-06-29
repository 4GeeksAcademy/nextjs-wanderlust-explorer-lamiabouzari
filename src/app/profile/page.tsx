"use client";

type ProfilePageProps = {
  favoriteCount?: number;
};

export default function ProfilePage({ favoriteCount = 0 }: ProfilePageProps) {

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 sm:px-10 lg:px-12">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl shadow-slate-900/15">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-2xl font-semibold">
            LB
          </div>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight">Lamia Bouzari</h1>
          <p className="mt-3 text-sm leading-7 text-white/75">
            Curious traveler collecting food trails, coastal hikes, and culture-first city breaks.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/8 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/60">Home base</p>
              <p className="mt-2 font-semibold">Casablanca, Morocco</p>
            </div>
            <div className="rounded-2xl bg-white/8 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/60">Favorite count</p>
              <p className="mt-2 font-semibold">{favoriteCount} saved experiences</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 rounded-[2rem] border border-border bg-white/85 p-8 shadow-lg shadow-slate-900/5 backdrop-blur">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Traveler profile</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Static profile overview</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Preferred pace</p>
              <p className="mt-2 font-semibold text-slate-900">Balanced itineraries</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">A mix of guided structure and free time for spontaneous stops.</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Go-to themes</p>
              <p className="mt-2 font-semibold text-slate-900">Food, culture, wellness</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Experiences that blend local rituals with a strong sense of place.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-slate-300 p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Saved planning note</p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Favorite count updates live from the shared app state, so this page always reflects the current shortlist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

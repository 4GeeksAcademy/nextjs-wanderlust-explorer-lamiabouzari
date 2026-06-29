"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

type NavbarProps = {
  favoriteCount: number;
};

export function Navbar({ favoriteCount }: NavbarProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
            Wanderlust Explorer
          </Link>
          <span className="inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-slate-700 lg:hidden">
            {favoriteCount} saved
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-2 text-sm">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 transition ${
                  isActive
                    ? "bg-brand text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white lg:inline-flex">
          {favoriteCount} favorite{favoriteCount === 1 ? "" : "s"}
        </div>
      </div>
    </header>
  );
}

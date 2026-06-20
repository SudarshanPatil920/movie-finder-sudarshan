"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Discover" },
  { href: "/favorites", label: "Favorites" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-600 shadow-lg shadow-amber-500/20">
            <span className="text-lg font-black text-black">F</span>
          </div>

          <div className="flex flex-col">
            <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-xl font-bold tracking-tight text-transparent">
              FrameFinder
            </span>

            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              Cinema Discovery
            </span>
          </div>
        </Link>

        <div className="flex gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-gold",
                pathname === item.href
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
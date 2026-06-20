"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const nav = [{ href: "/", label: "Discover" }, { href: "/favorites", label: "Favorites" }];
export function Header() { const pathname = usePathname(); return <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl"><nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5" aria-label="Main navigation"><Link href="/" className="flex items-center gap-2 font-semibold tracking-tight"><span className="grid size-8 place-items-center rounded-lg bg-gold text-lg text-ink">F</span> framefinder</Link><div className="flex gap-1">{nav.map(item => <Link key={item.href} href={item.href} className={cn("rounded-full px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-gold", pathname === item.href ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white")}>{item.label}</Link>)}</div></nav></header>; }

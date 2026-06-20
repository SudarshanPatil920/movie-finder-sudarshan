import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { QueryProvider } from "@/lib/query-client";
import "./globals.css";
export const metadata: Metadata = { title: "framefinder — Discover cinema", description: "A cinematic way to discover your next favourite film." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><QueryProvider><Header />{children}<Footer /></QueryProvider></body></html>; }

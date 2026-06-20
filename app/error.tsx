"use client";
import { ErrorState } from "@/components/states/ErrorState";
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) { return <main className="mx-auto max-w-3xl px-5 py-16"><ErrorState message={error.message} onRetry={reset} /></main>; }

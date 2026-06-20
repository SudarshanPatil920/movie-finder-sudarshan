import { Skeleton } from "@/components/ui/Skeleton";
export function LoadingState() { return <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6" aria-label="Loading movies">{Array.from({ length: 12 }, (_, index) => <div key={index}><Skeleton className="aspect-[2/3] w-full" /><Skeleton className="mt-3 h-4 w-3/4" /></div>)}</div>; }

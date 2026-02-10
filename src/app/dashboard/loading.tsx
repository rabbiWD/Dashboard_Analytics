
import Skeleton from "../Components/UI/Skeleton";

export default function Loading() {
  return (
    <div className="p-6 space-y-4">
      {/* Header skeleton */}
      <Skeleton className="h-10 w-64" />

      {/* Filters skeleton */}
      <Skeleton className="h-16" />

      {/* KPI cards skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-24" />
        ))}
      </div>

      {/* Charts skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Skeleton className="h-[340px]" />
        <Skeleton className="h-[340px]" />
        <Skeleton className="h-[360px] lg:col-span-2" />
      </div>
    </div>
  );
}

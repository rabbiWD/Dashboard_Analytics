"use client";

export default function EmptyState({
  title = "No data found",
  subtitle = "Try changing filters or check back later.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 text-center">
      <p className="text-base font-semibold text-gray-900">{title}</p>
      <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
    </div>
  );
}

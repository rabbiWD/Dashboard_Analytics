"use client";

export default function ErrorState({
  message = "Something went wrong.",
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <p className="text-sm font-medium text-red-600">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-3 inline-flex rounded-md border px-3 py-2 text-sm hover:bg-gray-50 active:scale-[0.98] transition"
        >
          Retry
        </button>
      )}
    </div>
  );
}

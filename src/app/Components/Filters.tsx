"use client";

import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  loadDashboard,
  setRange,
  setUserType,
} from "../../store/slices/dashboardSlice";

//  IMPORTANT: same source of truth for types
import type { Range, UserType } from "@/data/dashboardData";

export default function Filters() {
  const dispatch = useAppDispatch();
  const { filters, loading } = useAppSelector((s) => s.dashboard);

  const ranges = useMemo<{ key: Range; label: string }[]>(
    () => [
      { key: "7d", label: "Last 7 days" },
      { key: "30d", label: "Last 30 days" },
      { key: "12m", label: "Last 12 months" },
    ],
    []
  );

  const changeRange = useCallback(
    (range: Range) => {
      dispatch(setRange(range));
      dispatch(loadDashboard({ ...filters, range }));
    },
    [dispatch, filters]
  );

  const changeUserType = useCallback(
    (userType: UserType) => {
      dispatch(setUserType(userType));
      dispatch(loadDashboard({ ...filters, userType }));
    },
    [dispatch, filters]
  );

  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm dark:bg-gray-900 dark:border-gray-700 transition-colors">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Left: Range buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200 mr-1">
            Date range:
          </span>

          {ranges.map((b) => {
            const active = filters.range === b.key;

            return (
              <button
                key={b.key}
                type="button"
                disabled={loading}
                onClick={() => changeRange(b.key)}
                className={[
                  "px-3 py-2 rounded-md border text-sm font-medium",
                  "transition active:scale-[0.98]",
                  "focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600",
                  "disabled:opacity-60 disabled:cursor-not-allowed",
                  active
                    ? "bg-gray-900 text-white border-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:border-white"
                    : "bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-800",
                ].join(" ")}
                aria-pressed={active}
              >
                {b.label}
              </button>
            );
          })}

          {/* Loading badge */}
          {loading && (
            <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
              Updating…
            </span>
          )}
        </div>

        {/* Right: User type dropdown */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="userType"
            className="text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            User type:
          </label>

          <select
            id="userType"
            disabled={loading}
            value={filters.userType}
            onChange={(e) => changeUserType(e.target.value as UserType)}
            className={[
              "rounded-md border px-3 py-2 text-sm bg-white text-gray-900",
              "transition hover:bg-gray-50",
              "focus:outline-none focus:ring-2 focus:ring-gray-300",
              "disabled:opacity-60 disabled:cursor-not-allowed",
              "dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-600",
            ].join(" ")}
          >
            <option value="all">All</option>
            <option value="free">Free</option>
            <option value="premium">Premium</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </div>
      </div>
    </div>
  );
}

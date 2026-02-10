"use client";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { loadDashboard, setRange, setUserType } from "../../store/slices/dashboardSlice";
type Range = "7d" | "30d" | "12m";
type UserType = "all" | "free" | "premium" | "enterprise";
export default function Filters() {
  const dispatch = useAppDispatch();
  const { filters, loading } = useAppSelector((s) => s.dashboard);

  const changeRange = (range: "7d" | "30d" | "12m") => {
    dispatch(setRange(range));
    dispatch(loadDashboard({ ...filters, range }));
  };

  const changeUserType = (userType: "all" | "free" | "premium" | "enterprise") => {
    dispatch(setUserType(userType));
    dispatch(loadDashboard({ ...filters, userType }));
  };

  return (
    <div className="rounded-2xl border bg-white p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-2">
        {[
          { key: "7d", label: "Last 7 days" },
          { key: "30d", label: "Last 30 days" },
          { key: "12m", label: "Last 12 months" },
        ].map((b) => (
          <button
            key={b.key}
            disabled={loading}
            onClick={() => changeRange(b.key as Range)}
            className={`px-3 py-2 rounded-md border text-sm hover:bg-gray-50 disabled:opacity-60
              ${filters.range === b.key ? "bg-gray-900 text-white border-gray-900" : "text-black"}`}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">User type:</span>
        <select
          disabled={loading}
          value={filters.userType}
          onChange={(e) => changeUserType(e.target.value as UserType)}
          className="rounded-md border px-3 py-2 text-sm bg-white"
        >
          <option value="all">All</option>
          <option value="free">Free</option>
          <option value="premium">Premium</option>
          <option value="enterprise">Enterprise</option>
        </select>
      </div>
    </div>
  );
}

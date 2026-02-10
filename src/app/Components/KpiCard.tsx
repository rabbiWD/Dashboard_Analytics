"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  value: string;
  change: number; // e.g. 12.5 or -3.1
};

export default function KpiCard({ title, value, change }: Props) {
  const isPositive = change >= 0;

  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="mt-1 text-2xl font-bold text-gray-900">{value}</h3>
        </div>

        <div
          className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
            isPositive
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {isPositive ? (
            <ArrowUpRight size={14} />
          ) : (
            <ArrowDownRight size={14} />
          )}

          <span>
            {isPositive ? "+" : ""}
            {change.toFixed(1)}%
          </span>
        </div>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        Compared to previous period
      </p>
    </div>
  );
}

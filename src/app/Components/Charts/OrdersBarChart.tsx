"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export type OrdersPoint = { month: string; orders: number };

function ChartSkeleton() {
  return (
    <div className="h-[280px] animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
  );
}

export default function OrdersBarChart({
  data,
  loading,
}: {
  data: OrdersPoint[];
  loading: boolean;
}) {
  return (
    <div className="rounded-2xl border bg-white dark:bg-gray-900 dark:border-gray-700 p-4 transition-colors">
      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
        Orders Per Month
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Jan – Dec</p>

      {loading ? (
        <ChartSkeleton />
      ) : (
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

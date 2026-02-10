"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type RevenuePoint = { month: string; revenue: number };

const data: RevenuePoint[] = [
  { month: "Jan", revenue: 3200 },
  { month: "Feb", revenue: 4100 },
  { month: "Mar", revenue: 3900 },
  { month: "Apr", revenue: 5200 },
  { month: "May", revenue: 6100 },
  { month: "Jun", revenue: 5800 },
  { month: "Jul", revenue: 7200 },
  { month: "Aug", revenue: 6900 },
  { month: "Sep", revenue: 7600 },
  { month: "Oct", revenue: 8100 },
  { month: "Nov", revenue: 9000 },
  { month: "Dec", revenue: 9800 },
];

export default function RevenueLineChart() {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <h3 className="text-base font-semibold text-gray-900">
        Revenue Over Time
      </h3>
      <p className="text-sm text-gray-500 mb-3">Jan – Dec</p>

      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

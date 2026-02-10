"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import Card from "../UI/Card";
import Skeleton from "../UI/Skeleton";
import EmptyState from "../UI/EmptyState";

export default function RevenueLineChart({
  data,
  loading,
}: {
  data: { month: string; revenue: number }[];
  loading?: boolean;
}) {
  if (loading) {
    return (
      <Card title="Revenue Over Time" subtitle="Jan – Dec">
        <Skeleton className="h-[280px]" />
      </Card>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Card title="Revenue Over Time" subtitle="Jan – Dec">
        <EmptyState title="No revenue data" subtitle="Try changing filters." />
      </Card>
    );
  }

  return (
    <Card title="Revenue Over Time" subtitle="Jan – Dec">
      <div className="h-[280px] transition-opacity">
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
    </Card>
  );
}

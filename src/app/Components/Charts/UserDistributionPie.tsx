"use client";

import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";
import Card from "../UI/Card";
import Skeleton from "../UI/Skeleton";
import EmptyState from "../UI/EmptyState";

const COLORS = ["#60a5fa", "#34d399", "#fbbf24"];

export default function UserDistributionPie({
  users,
  loading,
}: {
  users: { free: number; premium: number; enterprise: number } | null;
  loading?: boolean;
}) {
  if (loading) {
    return (
      <Card title="User Distribution" subtitle="Free vs Premium vs Enterprise">
        <Skeleton className="h-[300px]" />
      </Card>
    );
  }

  const data = users
    ? [
        { name: "Free", value: users.free },
        { name: "Premium", value: users.premium },
        { name: "Enterprise", value: users.enterprise },
      ]
    : [];

  const total = data.reduce((a, b) => a + b.value, 0);

  if (!users || total === 0) {
    return (
      <Card title="User Distribution" subtitle="Free vs Premium vs Enterprise">
        <EmptyState title="No user distribution data" subtitle="Select a different user type." />
      </Card>
    );
  }

  return (
    <Card title="User Distribution" subtitle="Free vs Premium vs Enterprise">
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" outerRadius={90}>
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

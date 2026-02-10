"use client";

import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

const COLORS = ["#a78bfa", "#fb7185", "#22c55e", "#f97316"];

export default function TrafficSourcePie({
  traffic,
}: {
  traffic: { organic: number; paid: number; social: number; referral: number } | null;
}) {
  const data = traffic
    ? [
        { name: "Organic", value: traffic.organic },
        { name: "Paid", value: traffic.paid },
        { name: "Social", value: traffic.social },
        { name: "Referral", value: traffic.referral },
      ]
    : [];

  return (
    <div className="rounded-2xl border bg-white p-4">
      <h3 className="text-base font-semibold text-gray-900">Traffic Source</h3>
      <p className="text-sm text-gray-500 mb-3">Organic / Paid / Social / Referral</p>

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
    </div>
  );
}

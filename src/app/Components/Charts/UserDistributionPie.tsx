"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";

type Slice = { name: string; value: number };

const data: Slice[] = [
  { name: "Free", value: 720 },
  { name: "Premium", value: 420 },
  { name: "Enterprise", value: 105 },
];

// Recharts Pie এ colors না দিলেও default-এ ঠিক চলে,
// কিন্তু slice আলাদা বোঝাতে সাধারণত Cell লাগে।
// যদি একদম no-color চাই, Cell বাদ দিতে পারো।
const COLORS = ["#60a5fa", "#34d399", "#fbbf24"];

export default function UserDistributionPie() {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <h3 className="text-base font-semibold text-gray-900">
        User Distribution
      </h3>
      <p className="text-sm text-gray-500 mb-3">Free vs Premium vs Enterprise</p>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" outerRadius={90}>
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
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

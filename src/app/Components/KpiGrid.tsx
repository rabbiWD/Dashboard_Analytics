"use client";

import KpiCard from "./KpiCard";

export default function KpiGrid({
  stats,
  loading,
}: {
  stats: any | null;
  loading: boolean;
}) {
  if (loading || !stats) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-24 rounded-2xl bg-gray-100 animate-pulse" />
        ))}
      </div>
    );
  }

  const kpis = [
    {
      title: "Total Revenue",
      value: `$${stats.totalRevenue.toLocaleString()}`,
      change: stats.changes.totalRevenue,
    },
    {
      title: "Total Users",
      value: stats.totalUsers.toLocaleString(),
      change: stats.changes.totalUsers,
    },
    { title: "Orders", value: stats.orders.toLocaleString(), change: stats.changes.orders },
    { title: "Conversion Rate", value: `${stats.conversionRate}%`, change: stats.changes.conversionRate },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <KpiCard key={kpi.title} title={kpi.title} value={kpi.value} change={kpi.change} />
      ))}
    </section>
  );
}

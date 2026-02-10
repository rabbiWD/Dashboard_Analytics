"use client";

import KpiCard from "./KpiCard";
import Skeleton from "./UI/Skeleton";
import EmptyState from "./UI/EmptyState";

export default function KpiGrid({
  stats,
  loading,
}: {
  stats: any | null;
  loading: boolean;
}) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-24" />
        ))}
      </div>
    );
  }

  if (!stats) {
    return <EmptyState title="No KPI data" subtitle="Try a different date range." />;
  }

  const kpis = [
    { title: "Total Revenue", value: `$${stats.totalRevenue.toLocaleString()}`, change: stats.changes.totalRevenue },
    { title: "Total Users", value: stats.totalUsers.toLocaleString(), change: stats.changes.totalUsers },
    { title: "Orders", value: stats.orders.toLocaleString(), change: stats.changes.orders },
    { title: "Conversion Rate", value: `${stats.conversionRate}%`, change: stats.changes.conversionRate },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <KpiCard key={kpi.title} {...kpi} />
      ))}
    </section>
  );
}

"use client";

import KpiCard from "./KpiCard";

export default function KpiGrid() {
  const kpis = [
    { title: "Total Revenue", value: "$54,230", change: 12.4 },
    { title: "Total Users", value: "1,245", change: 6.2 },
    { title: "Orders", value: "342", change: -2.8 },
    { title: "Conversion Rate", value: "4.3%", change: 1.1 },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <KpiCard
          key={kpi.title}
          title={kpi.title}
          value={kpi.value}
          change={kpi.change}
        />
      ))}
    </section>
  );
}

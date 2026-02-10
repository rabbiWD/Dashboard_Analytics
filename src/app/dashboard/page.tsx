'use client';


import KpiCard from "../Components/KpiCard";
import KpiGrid from "../Components/KpiGrid";
import DashboardLayout from "../Components/Layouts/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl text-black font-bold">Welcome to Dashboard</h1>
      <KpiGrid/>
    </DashboardLayout>

  );
}

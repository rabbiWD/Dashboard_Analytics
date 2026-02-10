"use client";

import { useEffect } from "react";

import DashboardLayout from "../Components/Layouts/DashboardLayout";
import Filters from "../Components/Filters"; 

import KpiGrid from "../Components/KpiGrid";
import RevenueLineChart from "../Components/Charts/RevenueLineChart";
import OrdersBarChart from "../Components/Charts/OrdersBarChart";
import UserDistributionPie from "../Components/Charts/UserDistributionPie";
import TrafficSourcePie from "../Components/Charts/TrafficSourcePie";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadDashboard } from "../../store/slices/dashboardSlice";

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const { filters, loading, error, stats, revenue, orders, users, traffic } =
    useAppSelector((s) => s.dashboard);

  //  first load (Option A: local static data)
  useEffect(() => {
    dispatch(loadDashboard(filters));
  }, [dispatch]); // only once

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl text-black font-bold">Welcome to Dashboard</h1>

        {/*  Filters */}
        <Filters />

        {/* Error state */}
        {error && (
          <div className="rounded-xl border bg-white p-4">
            <p className="text-red-600 font-medium">{error}</p>
            <button
              onClick={() => dispatch(loadDashboard(filters))}
              className="mt-2 rounded-md border px-3 py-2 hover:bg-gray-50"
            >
              Retry
            </button>
          </div>
        )}

        {/* KPI (pass data) */}
        <KpiGrid stats={stats} loading={loading} />

        {/* Charts (pass filtered data) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <RevenueLineChart data={revenue} />
          <OrdersBarChart data={orders} loading={loading} />

          <div className="lg:col-span-2">
            <UserDistributionPie users={users} />
          </div>

          <div className="lg:col-span-2">
            <TrafficSourcePie traffic={traffic} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

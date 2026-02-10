"use client";

import { memo, useCallback, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";

import DashboardLayout from "../Components/Layouts/DashboardLayout";
import Filters from "../Components/Filters";
import KpiGrid from "../Components/KpiGrid";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadDashboard } from "../../store/slices/dashboardSlice";

// ---------- Simple skeleton (fallback) ----------
function BlockSkeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-2xl bg-gray-100 ${className}`} />;
}

// ---------- Lazy-loaded Charts (performance) ----------
const RevenueLineChart = dynamic(
  () => import("../Components/Charts/RevenueLineChart"),
  { ssr: false, loading: () => <BlockSkeleton className="h-[340px]" /> }
);

const OrdersBarChart = dynamic(
  () => import("../Components/Charts/OrdersBarChart"),
  { ssr: false, loading: () => <BlockSkeleton className="h-[340px]" /> }
);

const UserDistributionPie = dynamic(
  () => import("../Components/Charts/UserDistributionPie"),
  { ssr: false, loading: () => <BlockSkeleton className="h-[360px]" /> }
);

const TrafficSourcePie = dynamic(
  () => import("../Components/Charts/TrafficSourcePie"),
  { ssr: false, loading: () => <BlockSkeleton className="h-[360px]" /> }
);

// ---------- Empty state (memoized) ----------
const EmptyState = memo(function EmptyState({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 text-center">
      <p className="text-base font-semibold text-gray-900">{title}</p>
      {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
    </div>
  );
});

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const { filters, loading, error, stats, revenue, orders, users, traffic } =
    useAppSelector((s) => s.dashboard);

  //  First load + refetch on filter changes (only keys, not entire object)
  useEffect(() => {
    dispatch(loadDashboard(filters));
  }, [dispatch, filters.range, filters.userType]);

  //  Memoize empty check
  const isEmpty = useMemo(() => {
    const usersTotal =
      users ? users.free + users.premium + users.enterprise : 0;

    return (
      !loading &&
      (!revenue || revenue.length === 0) &&
      (!orders || orders.length === 0) &&
      usersTotal === 0
    );
  }, [loading, revenue, orders, users]);

  //  Stable retry handler
  const onRetry = useCallback(() => {
    dispatch(loadDashboard(filters));
  }, [dispatch, filters]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header area */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome to Dashboard
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Track revenue, orders, and user growth with filters.
            </p>
          </div>

          {loading && (
            <span className="text-xs text-gray-500 rounded-full border bg-white px-3 py-2">
              Updating…
            </span>
          )}
        </div>

        {/* Filters */}
        <Filters />

        {/* Error state */}
        {error && (
          <div className="rounded-2xl border bg-white p-5">
            <p className="text-red-600 font-semibold">Something went wrong</p>
            <p className="mt-1 text-sm text-gray-600">{error}</p>

            <button
              onClick={onRetry}
              className="mt-3 inline-flex rounded-md border px-3 py-2 text-sm hover:bg-gray-50 active:scale-[0.98] transition"
            >
              Retry
            </button>
          </div>
        )}

        {/* KPI */}
        <KpiGrid stats={stats} loading={loading} />

        {/* Empty state */}
        {isEmpty ? (
          <EmptyState
            title="No dashboard data found"
            subtitle="Try changing date range or user type."
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Charts (lazy-loaded) */}
            <RevenueLineChart data={revenue} loading={loading} />
            <OrdersBarChart data={orders} loading={loading} />

            <div className="lg:col-span-2">
              <UserDistributionPie users={users} loading={loading} />
            </div>

            <div className="lg:col-span-2">
              <TrafficSourcePie traffic={traffic} />
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

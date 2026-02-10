"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type OrdersPoint = { month: string; orders: number };

const ordersData: OrdersPoint[] = [
  { month: "Jan", orders: 18 },
  { month: "Feb", orders: 24 },
  { month: "Mar", orders: 21 },
  { month: "Apr", orders: 30 },
  { month: "May", orders: 35 },
  { month: "Jun", orders: 33 },
  { month: "Jul", orders: 41 },
  { month: "Aug", orders: 38 },
  { month: "Sep", orders: 45 },
  { month: "Oct", orders: 49 },
  { month: "Nov", orders: 54 },
  { month: "Dec", orders: 60 },
];

function ChartSkeleton() {
  return (
    <div className="h-[280px] animate-pulse rounded-xl bg-gray-100" />
  );
}

export default function OrdersBarChart() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<OrdersPoint[]>([]);

  //  Simulate API delay for “Animated loading”
  useEffect(() => {
    const t = setTimeout(() => {
      setData(ordersData);
      setLoading(false);
    }, 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="rounded-2xl border bg-white p-4">
      <h3 className="text-base font-semibold text-gray-900">
        Orders Per Month
      </h3>
      <p className="text-sm text-gray-500 mb-3">Jan – Dec</p>

      {loading ? (
        <ChartSkeleton />
      ) : (
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              {/*  Recharts bar animation happens on mount */}
              <Bar dataKey="orders" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

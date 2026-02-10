export type Range = "7d" | "30d" | "12m";
export type UserType = "all" | "free" | "premium" | "enterprise";

export const dashboardData = {
  stats: {
    totalRevenue: 54230,
    totalUsers: 1245,
    orders: 342,
    conversionRate: 4.3,
    changes: {
      totalRevenue: 12.4,
      totalUsers: 6.2,
      orders: -2.8,
      conversionRate: 1.1,
    },
  },
  revenue: [
    { month: "Jan", revenue: 3200 },
    { month: "Feb", revenue: 4100 },
    { month: "Mar", revenue: 3900 },
    { month: "Apr", revenue: 5200 },
    { month: "May", revenue: 6100 },
    { month: "Jun", revenue: 5800 },
    { month: "Jul", revenue: 7200 },
    { month: "Aug", revenue: 6900 },
    { month: "Sep", revenue: 7600 },
    { month: "Oct", revenue: 8100 },
    { month: "Nov", revenue: 9000 },
    { month: "Dec", revenue: 9800 },
  ],
  orders: [
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
  ],
  users: {
    free: 720,
    premium: 420,
    enterprise: 105,
  },
  traffic: {
    organic: 52,
    paid: 21,
    social: 17,
    referral: 10,
  },
};

import { dashboardData, Range, UserType } from "@/data/dashboardData";

const sliceByRange = <T,>(arr: T[], range: Range) => {
  if (range === "12m") return arr;
  if (range === "30d") return arr.slice(-6); // demo mapping
  return arr.slice(-3); // demo mapping
};

export function getFilteredDashboard(range: Range, userType: UserType) {
  const revenue = sliceByRange(dashboardData.revenue, range);
  const orders = sliceByRange(dashboardData.orders, range);

  let users = dashboardData.users;
  if (userType !== "all") {
    users = {
      free: userType === "free" ? dashboardData.users.free : 0,
      premium: userType === "premium" ? dashboardData.users.premium : 0,
      enterprise: userType === "enterprise" ? dashboardData.users.enterprise : 0,
    };
  }

  return {
    stats: dashboardData.stats,
    revenue,
    orders,
    users,
    traffic: dashboardData.traffic,
  };
}

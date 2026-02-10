import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Range, UserType } from "../../data/dashboardData";
import { getFilteredDashboard } from "../../lib/applyFilters";


type Filters = { range: Range; userType: UserType };

type DashboardState = {
  filters: Filters;
  stats: any | null;
  revenue: any[];
  orders: any[];
  users: any | null;
  traffic: any | null;
  loading: boolean;
  error: string | null;
};

const initialState: DashboardState = {
  filters: { range: "30d", userType: "all" },
  stats: null,
  revenue: [],
  orders: [],
  users: null,
  traffic: null,
  loading: false,
  error: null,
};

//  Option A: static file 
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const loadDashboard = createAsyncThunk(
  "dashboard/loadDashboard",
  async (filters: Filters) => {
    await sleep(400);
    return getFilteredDashboard(filters.range, filters.userType);
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setRange(state, action: PayloadAction<Range>) {
      state.filters.range = action.payload;
    },
    setUserType(state, action: PayloadAction<UserType>) {
      state.filters.userType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadDashboard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload.stats;
        state.revenue = action.payload.revenue;
        state.orders = action.payload.orders;
        state.users = action.payload.users;
        state.traffic = action.payload.traffic;
      })
      .addCase(loadDashboard.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load dashboard data.";
      });
  },
});

export const { setRange, setUserType } = dashboardSlice.actions;
export default dashboardSlice.reducer;

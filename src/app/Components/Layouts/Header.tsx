"use client";

import { Bell, Menu } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";

type Props = {
  onMobileMenu: () => void;      // ✅ mobile menu open
  onToggleCollapse: () => void;  // ✅ desktop collapse toggle
};

export default function Header({ onMobileMenu, onToggleCollapse }: Props) {
  return (
    <header className="sticky top-0 z-30 flex justify-between items-center bg-white border-b px-4 md:px-6 h-16">
      <div className="flex items-center gap-3">
        {/* ✅ Mobile menu toggle */}
        <button
          onClick={onMobileMenu}
          className="lg:hidden p-2 rounded-md border hover:bg-gray-50"
          aria-label="Open menu"
        >
          <Menu size={18} className="text-black" />
        </button>

        {/* ✅ Desktop collapse toggle */}
        <button
          onClick={onToggleCollapse}
          className="hidden lg:inline-flex p-2 rounded-md border hover:bg-gray-50"
          aria-label="Toggle sidebar"
        >
          <Menu size={18} className="text-black" />
        </button>

        <h2 className="text-xl text-black font-semibold">Dashboard</h2>
      </div>

      <div className="flex items-center gap-5">
        {/* Notification */}
        <button className="p-2 rounded-md hover:bg-gray-50" aria-label="Notifications">
          <Bell size={18} className="text-black" />
        </button>

        {/* Profile */}
        <ProfileDropdown />
      </div>
    </header>
  );
}

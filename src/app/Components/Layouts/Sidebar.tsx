"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

type Props = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}: Props) {
  const items = ["Dashboard", "Analytics", "Users", "Settings"];

  // ESC press -> close mobile drawer
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [setMobileOpen]);

  return (
    <>
      {/* ✅ Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen bg-gray-900 text-white
          transition-all duration-300
          ${collapsed ? "w-16" : "w-64"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className={`font-semibold ${collapsed ? "hidden" : "block"}`}>
            Admin
          </div>

          {/* ✅ mobile close */}
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-2 rounded hover:bg-white/10"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>

          {/* ✅ optional: collapse button inside sidebar (desktop) */}
          <button
            onClick={() => setCollapsed((p) => !p)}
            className="hidden lg:inline-flex p-2 rounded hover:bg-white/10"
            aria-label="Collapse sidebar"
          >
            {collapsed ? "»" : "«"}
          </button>
        </div>

        <nav className="p-3 space-y-2">
          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="block rounded px-3 py-2 hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              {collapsed ? item[0] : item}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

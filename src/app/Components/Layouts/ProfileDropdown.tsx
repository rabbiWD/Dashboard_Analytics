"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ✅ Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Close on ESC key
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition px-3 py-2 rounded-full"
      >
        <img
          src="https://i.pravatar.cc/40"
          alt="User avatar"
          className="w-9 h-9 rounded-full"
        />
        <span className="text-black flex items-center gap-1 font-medium">
          Admin
          <ChevronDown
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-xl shadow-lg overflow-hidden animate-in fade-in zoom-in-95">
          <button className="w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100">
            Profile
          </button>
          <button className="w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100">
            Settings
          </button>
          <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

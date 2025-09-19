"use client";
import Image from "next/image";
import { useState } from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import Data from "@/data/data";
export default function Header() {
  const today = new Date().toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [search, setSearch] = useState("");

const handelSearch = () => {
  console.log("Searching for:", search);
}

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50 h-20
        bg-white
        shadow-sm
        
      "
    >
      <div className="h-full mx-auto max-w-7xl px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.webp"
            alt="Logo"
            width={60}
            height={30}
            className="object-contain"
            priority
          />
        </div>

        {/* Search */}
        <div className="relative hidden md:block w-40 sm:w-56 md:w-80 lg:w-96">
          <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="ابحث هنا..."
            className="
              w-full pr-10 pl-4 py-2 rounded-lg
              border border-gray-200 bg-white/90
              focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400
              placeholder:text-gray-400
            "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search"
            title="Search"
          />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <span
            className="
              text-sm px-3 py-1 rounded-full
               border border-gray-200
            "
            aria-label="تاريخ اليوم"
            title="تاريخ اليوم"
          >
            {today}
          </span>

          <div
            className="
              flex items-center gap-2
            "
            aria-label="المسئول"
            title="المسئول"
          >
            <span className="text-sm">المسئول</span>
            <CiUser size={24} />
          </div>
        </div>
      </div>
    </header>
  );
}

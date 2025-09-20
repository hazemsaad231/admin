
"use client";
import Image from "next/image";
import { CiSearch, CiUser } from "react-icons/ci";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useContext } from "react";
import { Context } from "@/Context/context";

export default function Header() {
  const today = new Date().toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { isDarkMode, toggleMode , search , setSearch } = useContext(Context);


  return (
    <header
      className={` fixed top-0 left-0 w-full z-50 h-20 shadow-sm rounded-b-2xl
        ${isDarkMode ? "bg-[#111827] text-gray-100" : "bg-white text-gray-900"} `}
    >
      <div className="h-full mx-auto max-w-7xl px-2 md:px-6 lg:px-8 flex items-center justify-between">
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
          <CiSearch
            className={`absolute right-3 top-1/2 -translate-y-1/2 
              ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
          />
          <input
            type="text"
            placeholder="ابحث هنا..."
            className={`w-full pr-10 pl-4 py-2 rounded-lg border
              focus:outline-none focus:ring-2 
              ${isDarkMode
                ? "bg-[#1f2937] border-gray-700 placeholder:text-gray-400 focus:ring-blue-500/40 focus:border-blue-400 text-gray-100"
                : "bg-white border-gray-200 placeholder:text-gray-400 focus:ring-blue-500/40 focus:border-blue-400 text-gray-900"}
            `}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search"
            title="Search"
          />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <span
            className={`text-sm px-3 py-1 rounded-full border
              ${isDarkMode
                ? "border-gray-700 bg-[#1f2937] text-gray-200"
                : "border-gray-200 bg-gray-50 text-gray-700"}`}
            aria-label="تاريخ اليوم"
            title="تاريخ اليوم"
          >
            {today}
          </span>

          <div
            className="flex items-center gap-[2px]"
            aria-label="المسئول"
            title="المسئول"
          >
            <span className="text-sm">المسئول</span>
            <CiUser size={24} className={isDarkMode ? "text-gray-200" : "text-gray-700"} />
          </div>

          <div>
            
            {isDarkMode ? (
              <MdOutlineLightMode
                className="text-2xl mt-1 cursor-pointer text-yellow-400"
                onClick={toggleMode}
              />
            ) : (
              <MdOutlineDarkMode
                className="text-2xl mt-1 cursor-pointer text-gray-700"
                onClick={toggleMode}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

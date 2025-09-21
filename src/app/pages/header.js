"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { Context } from "@/Context/context";

export default function Header() {
  const today = new Date().toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { isDarkMode, toggleMode, search, setSearch } = useContext(Context);

  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (mobileSearchOpen && inputRef.current) inputRef.current.focus();
  }, [mobileSearchOpen]);

  const reset = () => {
    setSearch("");
    setMobileSearchOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 h-20 shadow-sm rounded-b-2xl
      ${isDarkMode ? "bg-[#111827] text-gray-100" : "bg-white text-gray-900"}`}
    >
      <div className="h-full mx-auto max-w-7xl px-1 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="https://taqreebye.com/"> <Image
            src="/logo.webp"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain shadow-lg rounded-xl w-10 h-10 md:w-16 md:h-16 cursor-pointer hover:scale-105 transition-transform duration-300"
            priority
          /> </a>
         
        </div>

        {/* الشاشات الكبيرة Search */}
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
            ${
              isDarkMode
                ? "bg-[#1f2937] border-gray-700 placeholder:text-gray-400 focus:ring-blue-500/40 focus:border-blue-400 text-gray-100"
                : "bg-white border-gray-200 placeholder:text-gray-400 focus:ring-blue-500/40 focus:border-blue-400 text-gray-900"
            }`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="بحث"
            title="بحث"
          />
        </div>

        <div className="flex items-center gap-2">
          {/*  البحث في الشاشات الصغيرة */}
          <button
            onClick={() => setMobileSearchOpen(true)}
            className={`md:hidden inline-flex items-center justify-center rounded-lg border p-2
              ${
                isDarkMode
                  ? "border-gray-700 hover:bg-gray-800/70 text-gray-200"
                  : "border-gray-200 hover:bg-gray-50 text-gray-700"
              }`}
            aria-label="افتح البحث"
            title="بحث"
          >
            <CiSearch className="text-xl" />
          </button>

          {/* تاريخ اليوم  */}
          <span
            className={`text-sm px-2 py-1 rounded-full border
            ${
              isDarkMode
                ? "border-gray-700 bg-[#1f2937] text-gray-200"
                : "border-gray-200 bg-gray-50 text-gray-700"
            }`}
            aria-label="تاريخ اليوم"
            title="تاريخ اليوم"
          >
            {today}
          </span>

          <div className={`flex items-center gap-[2px] border rounded-full px-1 py-1
          ${isDarkMode ? "border-gray-700 text-gray-200" : "border-gray-200 text-gray-700"}`} aria-label="المسئول" title="المسئول">
            <span className="text-sm">المسئول</span>
            <CiUser size={24} className={isDarkMode ? "text-gray-200" : "text-gray-700"} />
          </div>

          <div>
            {isDarkMode ? (
              <MdOutlineLightMode
                className="text-2xl mt-1 cursor-pointer text-yellow-400"
                onClick={toggleMode}
                title="الوضع الفاتح"
                aria-label="الوضع الفاتح"
              />
            ) : (
              <MdOutlineDarkMode
                className="text-2xl mt-1 cursor-pointer text-gray-700"
                onClick={toggleMode}
                title="الوضع الداكن"
                aria-label="الوضع الداكن"
              />
            )}
          </div>
        </div>
      </div>

      {mobileSearchOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileSearchOpen(false)}
          />
          <div
            className={`absolute top-0 left-0 right-0 mt-2 mx-2 rounded-2xl border shadow-lg
            ${
              isDarkMode
                ? "bg-[#111827] border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center gap-2 p-2">
              <CiSearch className={`${isDarkMode ? "text-gray-300" : "text-gray-500"} text-xl`} />
              <input
                ref={inputRef}
                type="text"
                placeholder="ابحث هنا..."
                className={`flex-1 px-2 py-2 rounded-lg border focus:outline-none focus:ring-2
                ${
                  isDarkMode
                    ? "bg-[#1f2937] border-gray-700 placeholder:text-gray-400 focus:ring-blue-500/40 focus:border-blue-400 text-gray-100"
                    : "bg-white border-gray-200 placeholder:text-gray-400 focus:ring-blue-500/40 focus:border-blue-400 text-gray-900"
                }`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="بحث في الموبايل"
              />
              <button
                onClick={() => setMobileSearchOpen(false)}
                className={`p-2 rounded-lg border
                ${
                  isDarkMode
                    ? "border-gray-700 hover:bg-gray-800/70 text-gray-200"
                    : "border-gray-200 hover:bg-gray-50 text-gray-700"
                }`}
                aria-label="إغلاق البحث"
                title="إغلاق"
              >
                <IoClose className="text-xl" onClick={reset}/>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

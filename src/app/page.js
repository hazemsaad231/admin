"use client";

import Data from "@/data/data";
import CountUp from "react-countup";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 
                    flex flex-col py-10 px-4 md:px-6 lg:px-8 mt-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Data.map((item) => (
            <div
              key={item.title}
              className={`
                bg-white rounded-2xl border border-gray-200
                shadow-sm hover:shadow-lg transition-all duration-300
                p-2 flex flex-col items-center text-center gap-4
                hover:-translate-y-1
              
              tabIndex={0}
              aria-label={item.title}`}
              //  style={{ borderColor: item.color }}
              // tabIndex={0}
              // aria-label={item.title}
            >
              {/* أيقونة */}
              <div className="p-3 rounded-xl border border-gray-200 shadow-sm bg-gray-50 text-gray-600">
                {item.icon}
              </div>

              {/* الرقم الأساسي */}
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                <CountUp end={item.value} duration={2.5} separator="," />
              </h2>

              {/* العنوان */}
              <div
                className="
                  inline-flex items-center gap-2 rounded-full
                  border border-gray-200 bg-gray-50
                  px-3 py-1 text-xs font-medium text-gray-600
                "
                title={item.title}
              >
                {item.title}
              </div>

              {/* الإجمالي */}
              <div className="flex items-center gap-2 mt-1">
                <span className="rounded-full px-2 py-0.5 text-[11px] border border-gray-200 bg-white text-gray-500 shadow-sm">
                  الإجمالي
                </span>
                <span className="text-base md:text-lg font-semibold text-gray-800">
                  <CountUp end={item.total} duration={2} separator="," />
                </span>
              </div>

              {/* الرسم البياني لو متاح */}
              {item.chart && (
                <div className="mt-3 h-16 md:h-20 w-full [direction:ltr]">
                  {item.chart}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

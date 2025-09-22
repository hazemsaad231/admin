"use client";

import { useContext } from "react";
import { Context } from "@/Context/context";
import CountUp from "react-countup";

export default function Home() {

    const { isDarkMode, filteredData} = useContext(Context);
    

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}
                    flex flex-col py-8 px-4 md:px-6 lg:px-8 mt-20`}>
      <div className="mx-auto w-full max-w-7xl">
        <div className={`grid gap-3 ${
          filteredData.length === 1
            ? 'grid-cols-1'
            : filteredData.length === 2
            ? 'grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'
            : 'grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {filteredData.map((item) => (
            <div
              key={item.title}
              className={`
              border ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-200'}
                shadow-md hover:shadow-lg transition-all duration-500 rounded-4xl
                p-1 flex flex-col items-center text-center gap-2
                hover:-translate-y-3
              
              tabIndex={0}
              aria-label={item.title}`}
            >
              {/* أيقونة */}
              <div className={`p-2 rounded-xl border ${isDarkMode ? 'bg-gray-600 border-gray-500' : 'bg-gray-100 border-gray-300'}`}>
                {item.icon}
              </div>

              {/* الرقم الأساسي */}
              <h2 className={`text-3xl md:text-5xl font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <CountUp end={item.value} duration={2.5} separator="," />
              </h2>

              {/* العنوان */}
              <div
                className={`
                  inline-flex items-center gap-2 rounded-full
                  border ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-gray-100 border-gray-300 text-gray-800'}
                  px-3 py-1 text-xs
                  font-bold
                `}
                title={item.title}
              >
                {item.title}
              </div>

              {/* الإجمالي */}
              <div className="flex items-center gap-2 mt-1">
                <span className={`rounded-full px-2 py-0.5 text-[11px] border ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-gray-100 border-gray-300 text-gray-800'} shadow-sm`}>
                  الإجمالي
                </span>
                <span className={`text-md md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <CountUp end={item.total} duration={2} separator="," />
                </span>
              </div>

              {/* الرسم البياني */}
              {item.chart && (
                <div className="mt-3 h-16 md:h-20 w-full [direction:ltr] text-gray-500">
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

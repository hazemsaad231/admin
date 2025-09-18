

"use client";

import dynamic from "next/dynamic";
import { CiFacebook, CiUser, CiLocationOn } from "react-icons/ci";
import { BiSolidInstitution } from "react-icons/bi";
import { HiOutlineDocumentReport } from "react-icons/hi";

import { FaFolderOpen, FaGlobe } from "react-icons/fa";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


export const colors = ['orange','#582f0e',"#3b82f6","#ef4444",'blue','#10b981','#5e503f']

/** شارة أيقونة مرتبطة بلون الشارت */
const IconBadge = ({
  children,
  color,
  size = 60,
}) => (
  <span
    className="
      flex items-center justify-center rounded-2xl
      transition-transform duration-300 p-2
    "
  >
    <span
      className="rounded-lg flex items-center justify-center text-5xl"
      style={{
        color,
        width: size,
        height: size,
        textShadow: `0 0 8px ${color}22`,
      }}
    >
      {children}
    </span>
  </span>
);

// إعدادات عامة للسباركلاين
const sparkOptions = (color = "#22c55e") => ({
  chart: { type: "area", height: 60, sparkline: { enabled: true } },
  stroke: { curve: "smooth", width: 2 },
  fill: { type: "gradient", gradient: { opacityFrom: 0.4, opacityTo: 0 } },
  colors: [color],
  tooltip: { x: { show: false } },
});

const Data = [
  (() => {
    return {
      title: "عدد زوار المنصة",
      value: 9615,
      total: 66725,
      color: colors[0],
      icon: (
        <IconBadge color={colors[0]}>
          <CiUser />
        </IconBadge>
      ),
      chart: (
        <Chart
          options={{
            ...sparkOptions(colors[0]),
            chart: { type: "line", height: 60, sparkline: { enabled: true } },
            stroke: { curve: "smooth", width: 2 },
            fill: { opacity: 0 }, // خط فقط
          }}
          series={[{ data: [50, 48, 55, 60, 65, 70, 80] }]}
          type="line"
          height={60}
        />
      ),
    };
  })(),

  // 1) Area
  (() => {
    return {
      title: "عدد مشاريع الجمعيات المنشورة في المنصة",
      mod : "مشاريع الجمعيات",
      value: 37,
      total: 1122,
      color: colors[1],
      icon: (
        <IconBadge color={colors[1]}>
          <FaFolderOpen />
        </IconBadge>
      ),
      chart: (
        <Chart
          options={sparkOptions(colors[1])}
          series={[{ data: [3, 5, 4, 7, 9, 8, 10] }]}
          type="area"
          height={60}
        />
      ),
    };
  })(),

  (() => {
    
    return {
      title: "عدد زوار فيسبوك",
      value: 4860,
      mod: "زوار فيسبوك",
      total: 42135,
      color: colors[2],
      icon: (
        <IconBadge color={colors[2]}>
          <CiFacebook />
        </IconBadge>
      ),
      chart: (
        <Chart
          options={{
            ...sparkOptions(colors[2]),
            chart: { type: "bar", height: 60, sparkline: { enabled: true } },
            plotOptions: { bar: { columnWidth: "60%", borderRadius: 3 } },
          }}
          series={[{ data: [20, 25, 22, 28, 30, 27, 32] }]}
          type="bar"
          height={60}
        />
      ),
    };
  })(),

  (() => {
    
    const value = 10;
    const total = 43;
    return {
      title: "عدد التقارير والدراسات المنشورة",
      mod: "تقارير ودراسات",
      value,
      total,
      color: colors[3],
      icon: (
        <IconBadge color={colors[3]}>
          <HiOutlineDocumentReport />
        </IconBadge>
      ),
      chart: (
        <Chart
          options={{
            chart: { type: "radialBar", height: 60, sparkline: { enabled: true } },
            plotOptions: {
              radialBar: {
                hollow: { size: "40%" },
                dataLabels: { show: false },
              },
            },
            colors: [colors[3]],
          }}
          series={[Math.round((value / total) * 100)]}
          type="radialBar"
          height={60}
        />
      ),
    };
  })(),

  (() => {
    return {
      title: "عدد الجمعيات المسجلة في المنصة",
      value: 0,
      total: 135,
      mod: "جمعيات المسجلة",
      color: colors[4],
      icon: (
        <IconBadge color={colors[4]}>
          <BiSolidInstitution />
        </IconBadge>
      ),
      chart: (
        <Chart
          options={{
            chart: { type: "polarArea", height: 60, sparkline: { enabled: true } },
            labels: ["مسجل", "باقي"],
            colors: [colors[4], "blue"],
            legend: { show: false },
            tooltip: { enabled: false },
          }}
          series={[0, 135]}
          type = 'polarArea'
          height={60}
        />
      ),
    };
  })(),

  (() => {
    return {
      title: "عدد المتفاعلين مع المنصة",
      value: 1658,
      total: 19510,
      mod: "متفاعلين",
      color: colors[5],
      icon: (
        <IconBadge color={colors[5]}>
          <FaGlobe />
        </IconBadge>
      ),
      chart: (
        <Chart
          options={{
            chart: { type: "heatmap", height: 60, sparkline: { enabled: true } },
            plotOptions: { heatmap: { shadeIntensity: 0.2, radius: 2 } },
            dataLabels: { enabled: false },
            colors: [colors[5]],
            tooltip: { x: { show: false } },
          }}
          series={[
            {
              name: "W",
              data: [
                { x: "1", y: 10 },
                { x: "2", y: 15 },
                { x: "3", y: 12 },
                { x: "4", y: 18 },
                { x: "5", y: 20 },
                { x: "6", y: 19 },
                { x: "7", y: 25 },
              ],
            },
          ]}
          type="heatmap"
          height={60}
        />
      ),
    };
  })(),

  (() => {
    return {
      title: "عدد المحافظات المخططة في المنصة",
      value: 0,
      total: 13,
      color: colors[6],
      mod: "محافظات المخططة",
      icon: (
        <IconBadge color={colors[6]}>
          <CiLocationOn />
        </IconBadge>
      ),
      chart: (
        <Chart
          options={{
            chart: { type: "scatter", height: 60, sparkline: { enabled: true } },
            markers: { size: 3 },
            tooltip: { x: { show: false } },
            colors: [colors[6]],
            xaxis: { labels: { show: false } },
            yaxis: { labels: { show: false } },
          }}
          series={[
            {
              name: "خطة",
              data: [
                [1, 0],
                [2, 0],
                [3, 1],
                [4, 0],
                [5, 2],
                [6, 1],
                [7, 3],
              ],
            },
          ]}
          type="scatter"
          height={60}
        />
      ),
    };
  })(),
];

export default Data;


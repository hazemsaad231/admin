

"use client";

import dynamic from "next/dynamic";
import { CiFacebook, CiUser, CiLocationOn } from "react-icons/ci";
import { BiSolidInstitution } from "react-icons/bi";
import { HiOutlineDocumentReport } from "react-icons/hi";

import { FaFolderOpen, FaGlobe } from "react-icons/fa";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


export const colors = ['orange','black',"blue","aqua",'brown','gray','green'];


const IconBadge = ({
  children,
  color,
}) => (

    <span
      className="rounded-lg flex items-center justify-center text-5xl"
      style={{
        color,
        textShadow: `0 0 8px ${color}22`,
      }}
    >
      {children}
    </span>
);


const sparkOptions = (color = "#22c55e") => ({
  chart: { type: "area", height: 60, sparkline: { enabled: true } },
  stroke: { curve: "smooth", width: 2 },
  fill: { type: "gradient", gradient: { opacityFrom: 0.4, opacityTo: 0 } },
  colors: [color],
  tooltip: { x: { show: false } },
});




const Data = [

(() => {
  const title = "عدد زوار المنصة";
  const value = 9615;
  const total = 66725;
  const color = colors[0];

  return {
    title,
    value,
    total,
    color,
    icon: (
      <IconBadge color={color}>
        <CiUser />
      </IconBadge>
    ),
    chart: (
      <Chart
        options={{
          ...sparkOptions(color),
          chart: { type: "line", height: 60, sparkline: { enabled: true } },
          stroke: { curve: "smooth", width: 2 },
          fill: { opacity: 0 },
          tooltip: {
            x: { show: false },
            y: {
              formatter: (val) => `${val.toLocaleString("ar-EG")} زائر`,
            },
          },
        }}
        series={[
          {
            name: "عدد الزوار",
            data: [1200, 2300, 3500, 4700, 6000, 7800, value],
          },
        ]}
        type="line"
        height={60}
      />
    ),
  };
})()
,
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
          series={[{ data: [5, 7, 15, 22, 30, 31, 37] }]}
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
          series={[{ data: [1000, 5205, 8002, 13778, 22220, 35000, 42135] }]}
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
              data: [12, 19, 8, 15, 10, 17, 1658],
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
                [11, 0],
                [10, 0],
                [3, 1],
                [4, 6],
                [9, 2],
                [6, 9],
                [3, 5],
                [7, 6],
                [1, 7],
                [2, 3],
                [5, 8],
                [0, 3],
                [8, 2],


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


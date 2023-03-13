import React, { useMemo } from "react";
import styles from "./Analytics.module.scss";
import { categories } from "../../utils/categories";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Cell,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
} from "recharts";

import { useState } from "react";

export default function Expenses() {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    { name: "Jan", value: 100 },
    { name: "Feb", value: 200 },
    { name: "Mar", value: 150 },
    { name: "Apr", value: 300 },
    { name: "May", value: 400 },
    { name: "Jun", value: 250 },
    { name: "July", value: 100 },
    { name: "Aug", value: 200 },
    { name: "Sept", value: 150 },
    { name: "Oct", value: 300 },
    { name: "Nov", value: 400 },
    { name: "Dec", value: 250 },
  ];

  const piedata = useMemo(
    () =>
      categories.map((category, index) => ({
        name: category,
        value: Math.floor(Math.random() * 1000),
        color: `hsl(${(index * 360) / categories.length}, 70%, 50%)`,
      })),
    [categories]
  );

  const onMouseOver = (data: any, index: number) => setActiveIndex(index);

  const formatTooltip = (value: any) => {
    return `$${value}`;
  };
  return (
    <>
      <div className={styles.expenses}>
        <div className={styles.expensesCard}>
          <div className={styles.expensesOverview}>
            <div className={styles.expensesHeader}>
              <p className={styles.expensesTitle}>Analytics</p>
            </div>

            <div className={styles.mainBody}>
              <BarChart data={data} width={530} height={300}>
                <XAxis
                  dataKey="name"
                  axisLine={{ stroke: "transparent" }}
                  tickLine={{ stroke: "transparent" }}
                />
                <Bar
                  dataKey="value"
                  fill="rgba(21, 122, 255, .2)"
                  onMouseOver={onMouseOver}
                >
                  {data.map((entry, index) => (
                    <Cell
                      cursor="pointer"
                      fill={
                        index === activeIndex
                          ? "rgb(21, 122, 255)"
                          : "rgba(21, 122, 255, .2)"
                      }
                      key={index}
                    />
                  ))}
                </Bar>
                <Tooltip formatter={formatTooltip} />
              </BarChart>
              <PieChart width={400} height={400}>
                <Pie
                  data={piedata}
                  cx={200}
                  cy={200}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {piedata.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

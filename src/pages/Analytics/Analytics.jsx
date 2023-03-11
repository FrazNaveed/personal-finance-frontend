import styles from "./Analytics.module.scss";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Cell,
  XAxis,
  Tooltip,
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

  const onMouseOver = (data, index) => setActiveIndex(index);

  const formatTooltip = (value) => {
    return [`$${value}`];
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
              <ResponsiveContainer width="50%" height="40%">
                <BarChart data={data}>
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
              </ResponsiveContainer>
              <div
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  padding: "24px",
                  width: "300px",
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    marginBottom: "24px",
                    color: "#5c5c5c",
                  }}
                >
                  $20
                </div>
                <div
                  style={{
                    color: "#b4b4b4",
                    fontSize: "16px",
                    marginBottom: "16px",
                  }}
                ></div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#5c5c5c",
                  }}
                >
                  Total expenses
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

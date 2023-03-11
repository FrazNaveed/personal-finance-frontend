import styles from "./Settings.module.scss";
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

  return (
    <>
      <div className={styles.expenses}>
        <div className={styles.expensesCard}>
          <div className={styles.expensesOverview}>
            <div className={styles.expensesHeader}>
              <p className={styles.expensesTitle}>Settings</p>
            </div>

            <div className={styles.textbox_container}>
              <input
                type="text"
                placeholder="Enter your name"
                className={styles.textbox}
              />
              <button className={styles.button}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

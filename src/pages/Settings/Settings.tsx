import styles from "./Settings.module.scss";
import { useState } from "react";
import axios from "axios";

export default function Expenses() {
  const [salary, setSalary] = useState(0);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleKeyPress(event: any) {
    if (event.key === "-" || event.key === "+") {
      event.preventDefault();
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const updateIncome = async () => {
    console.log("heres");
    const email = localStorage.getItem("email");

    const response = await fetch("http://localhost:5000/updateIncome", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: email,
        income: salary,
      }),
    });
    console.log(response);
    if (response.status == 200) {
      alert("Updated successfully");
    } else if (response.status == 404) {
      alert("User not found");
    } else {
      alert("Internal server error");
    }
  };
  const updatePassword = async () => {
    const email = localStorage.getItem("email");

    const response = await fetch("http://localhost:5000/updatePassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (response.status == 200) {
      alert("Updated successfully");
    } else if (response.status == 404) {
      alert("User not found");
    } else {
      alert("Internal server error");
    }
  };

  return (
    <>
      <div className={styles.settings}>
        <div className={styles.settingsCard}>
          <div className={styles.settingsOverview}>
            <div className={styles.settingsHeader}>
              <p className={styles.settingsTitle}>Settings</p>

              <div className={styles.textbox_container}>
                <input
                  type="number"
                  placeholder="Update Monthly Income"
                  className={styles.textbox}
                  step="any"
                  min="0"
                  onKeyPress={handleKeyPress}
                  onChange={(e) => {
                    setSalary(parseInt(e.target.value));
                  }}
                />
                <button className={styles.button} onClick={updateIncome}>
                  Update
                </button>
              </div>

              <div className={styles.textbox_container}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Update Password"
                  className={styles.textbox}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
                <button className={styles.button} onClick={updatePassword}>
                  Update
                </button>
                <button
                  onClick={toggleShowPassword}
                  className={styles.button}
                  style={{ marginLeft: "5px" }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import styles from "./Expenses.module.scss";
import Modal from "react-modal";
import { useState } from "react";
import optionIcon from "../../assets/png/menuIcon.png";
import cartIcon from "../../assets/svg/cartIcon.svg";
import transportIcon from "../../assets/svg/transportIcon.svg";
import houseIcon from "../../assets/svg/houseIcon.svg";
import boxes from "../../assets/png/boxes.png";
import plant from "../../assets/png/plant.png";
Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "600px",
    maxHeight: "80vh",
    borderRadius: "8px",
    padding: "24px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
    backgroundColor: "white",
    border: "none",
  },
};

const categories = [
  "Food",
  "Transportation",
  "Entertainment",
  "Utilities",
  "Other",
];

export default function Expenses() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [expenseName, setExpenseName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseTime, setExpenseTime] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const handleAddExpense = (e: any) => {
    e.preventDefault();
    const newExpense = {
      name: expenseName,
      category: selectedCategory,
      date: expenseDate,
      time: expenseTime,
      amount: expenseAmount,
    };
    // addExpense(newExpense);
    handleCloseModal();
  };

  function handleKeyPress(event: any) {
    if (event.key === "-" || event.key === "+") {
      event.preventDefault();
    }
  }

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const todayExpenses = [
    {
      id: 1,
      expense: "Grocery",
      time: "5:12 pm",
      location: "xyz location",
      price: 326.8,
      icon: cartIcon,
      iconBackgroundColor: "#32a7e2",
    },
    {
      id: 2,
      expense: "Transportation",
      time: "5:12 pm",
      location: "xyz bus terminal",
      price: 15.0,
      icon: transportIcon,
      iconBackgroundColor: "#B548C6",
    },
    {
      id: 3,
      expense: "Housing",
      time: "5:12 pm",
      location: "rent",
      price: 185.75,
      icon: houseIcon,
      iconBackgroundColor: "#FF8700",
    },
  ];
  const previousExpenses = [
    {
      id: 1,
      expense: "Food and Drink",
      time: "5:12 pm",
      location: "xyz restaurant",
      price: 156.0,
      icon: cartIcon,
      iconBackgroundColor: "#DC3434",
    },
    {
      id: 2,
      expense: "Entertainment",
      time: "5:12 pm",
      location: "cineplex",
      price: 35.2,
      icon: transportIcon,
      iconBackgroundColor: "#4BA83D",
    },
  ];
  const spendCategories = [
    {
      id: 1,
      category: "Food and Drinks",
      price: 872.4,
    },
    {
      id: 2,
      category: "Shopping",
      price: 1378.2,
    },
    {
      id: 3,
      category: "Housing",
      price: 928.5,
    },
    {
      id: 4,
      category: "Transportation",
      price: 420.7,
    },
    {
      id: 5,
      category: "Vehicle",
      price: 520,
    },
  ];

  return (
    <>
      <main className={styles.expenses}>
        <div className={styles.expensesCard}>
          <section className={styles.expensesOverview}>
            <div className={styles.expensesHeader}>
              <p className={styles.expensesTitle}>Expenses</p>
              <div className={styles.expensesActions}>
                <button
                  className={styles.addExpenseButton}
                  onClick={handleOpenModal}
                >
                  Create Expense
                </button>
              </div>
            </div>

            <div className={styles.expensesOverviewHeader}>
              <p className={styles.expensesOverviewTitle}>Today</p>
              <button>
                <img
                  className={styles.expenseOption}
                  src={optionIcon}
                  alt="options"
                />
              </button>
            </div>

            <div>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Example Modal"
                style={customStyles}
              >
                <h2 className={styles.heading}>Add Expense</h2>
                <button
                  onClick={handleCloseModal}
                  className={styles.close_button}
                >
                  &times;
                </button>

                <form onSubmit={handleAddExpense} className={styles.formGroup}>
                  <div>
                    <label htmlFor="expense-name" className={styles.label}>
                      Expense Name
                    </label>
                    <input
                      type="text"
                      id="expense-name"
                      value={expenseName}
                      onChange={(e) => setExpenseName(e.target.value)}
                      className={styles.input}
                      placeholder="e.g. Grace & Savour Restaurant"
                    />
                  </div>
                  <div>
                    <label htmlFor="category" className={styles.label}>
                      Category
                    </label>
                    <select
                      id="category"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className={styles.select}
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="expense-date" className={styles.label}>
                      Date
                    </label>
                    <input
                      type="date"
                      id="expense-date"
                      value={expenseDate}
                      onChange={(e) => setExpenseDate(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                  <div>
                    <label htmlFor="expense-time" className={styles.label}>
                      Time
                    </label>
                    <input
                      type="time"
                      id="expense-time"
                      value={expenseTime}
                      onChange={(e) => setExpenseTime(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                  <div>
                    <label htmlFor="expense-amount" className={styles.label}>
                      Amount
                    </label>
                    <input
                      type="number"
                      id="expense-amount"
                      value={expenseAmount}
                      onChange={(e) => setExpenseAmount(e.target.value)}
                      className={styles.input}
                      step="any"
                      min="0"
                      onKeyPress={handleKeyPress}
                      placeholder="e.g. $1600"
                    />
                  </div>
                  <button
                    type="submit"
                    className={styles.addExpenseButton_margin}
                  >
                    Submit
                  </button>
                </form>
              </Modal>
            </div>

            <ul>
              {todayExpenses.map((expense) => (
                <li className={styles.expenseItem} key={expense.id}>
                  <div className={styles.expenseItemLeft}>
                    <div
                      style={{ backgroundColor: expense.iconBackgroundColor }}
                      className={styles.expenseItemDiv}
                    >
                      <img src={cartIcon} alt={expense.expense} />
                    </div>
                    <div className={styles.expenseItemDetails}>
                      <p className={styles.expenseItemTitle}>
                        {expense.expense}
                      </p>
                      <p className={styles.expenseItemTime}>
                        {expense.time} • {expense.location}
                      </p>
                    </div>
                  </div>
                  <p className={styles.expenseItemPrice}>
                    {expense.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>

            <div className={styles.expensesOverviewHeader}>
              <p className={styles.expensesOverviewTitle}>
                Monday, 23 March 2020
              </p>
              <button>
                <img
                  className={styles.expenseOption}
                  src={optionIcon}
                  alt="options"
                />
              </button>
            </div>

            <ul>
              {previousExpenses.map((expense) => (
                <li className={styles.expenseItem} key={expense.id}>
                  <div className={styles.expenseItemLeft}>
                    <div
                      style={{ backgroundColor: expense.iconBackgroundColor }}
                      className={styles.expenseItemDiv}
                    >
                      <img src={cartIcon} alt={expense.expense} />
                    </div>
                    <div className={styles.expenseItemDetails}>
                      <p className={styles.expenseItemTitle}>
                        {expense.expense}
                      </p>
                      <p className={styles.expenseItemTime}>
                        {expense.time} • {expense.location}
                      </p>
                    </div>
                  </div>
                  <p className={styles.expenseItemPrice}>
                    {expense.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.moneyOverview}>
            <p className={styles.moneyOverviewTitle}>Where'd your money go</p>

            <ul>
              {spendCategories.map((category) => (
                <li key={category.id}>
                  <div className={styles.spendCategory}>
                    <p className={styles.spendCategoryName}>
                      {category.category}
                    </p>
                    <p className={styles.spendCategoryPrice}>
                      {category.price.toFixed(2)}
                    </p>
                  </div>
                  <div className={styles.spendCategoryBar}>
                    <div
                      style={{
                        width: `${
                          (category.price /
                            spendCategories.reduce(
                              (acc, current) => acc + current.price,
                              0
                            )) *
                          100
                        }%`,
                      }}
                      className={styles.spendCategoryColoredBar}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.saveMoneyDiv}>
              <img className={styles.boxes} src={boxes} alt="boxes" />
              <img className={styles.plant} src={plant} alt="plant" />
              <p className={styles.saveMoneyTitle}>Save more money</p>
              <p className={styles.saveMoneyInfo}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique, a.
              </p>
              <button className={styles.button} type="button">
                VIEW TIPS
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

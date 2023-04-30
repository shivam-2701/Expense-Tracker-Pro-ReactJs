import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

function Expenses(props) {
  const expenses = props.expenses;

  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (event) => {
    console.log(event.target.value);
    setFilteredYear(event.target.value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    console.log("filteredExpenses called");
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;

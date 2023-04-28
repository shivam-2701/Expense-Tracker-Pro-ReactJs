import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnterdTitle] = useState("");
  const [enteredAmount, setEnterdAmount] = useState("");
  const [enteredDate, setEnterdDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // Should use a callback function when using previous state in the newState as it ensures that the latest state is passed
    // setUserInput((prevState)=>{
    //     return {
    //       ...prevState,
    //       enteredTitle:event.target.value,
    //     }
    // });

    setEnterdTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnterdDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnterdAmount(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    props.onSaveExpenseData({
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    });

    // here we are using two way binding
    setEnterdAmount("");
    setEnterdDate("");
    setEnterdTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            placeholder="dd-mm-yyyy"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;

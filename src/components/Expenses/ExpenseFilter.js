import React from "react";

import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  return (
    <div className="filter-container">
      <label className="label__filter">Filter by year</label>
      <select onChange={props.onChangeFilter}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
}
export default ExpenseFilter;

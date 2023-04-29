<h1>

    Course Comments and documentation

</h1>

## Rendering Conditional Content in react

### Using ternary operator and && operator short circuiting

```
{/* On way of rendering content conditionally */}
      {filteredExpenses.length === 0 ? (
        <p>No expenses found</p>
      ) : (
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })
      )}

      {/* Other way is to use && which return the statement after && if the conditon before it is truthy */}

       {filteredExpenses.length === 0 && <p>No expenses found</p>}

      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}

```

### Using variable to store the JSX element which is to be rendered

```
  let expenseContent = <p className=".para">No Item for selected year</p>;


  if(filteredExpenses.length>0){

    expenseContent=filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    })

  }

//Inside the return statement
  {expenseContent}
```

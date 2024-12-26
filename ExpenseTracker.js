import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = () => {
    if (expense.trim() && amount.trim()) {
      setExpenses([...expenses, { expense, amount: parseFloat(amount) }]);
      setExpense('');
      setAmount('');
    }
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="expense-tracker">
      <h2>Expense Tracker</h2>
      <input
        type="text"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        placeholder="Expense description"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={addExpense}>Add Expense</button>
      <ul>
        {expenses.map((e, index) => (
          <li key={index}>
            {e.expense}: ${e.amount.toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default ExpenseTracker;

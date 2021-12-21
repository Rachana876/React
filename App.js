import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Vegetables',
      amount: 100,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'TV', amount: 20000, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Charger',
      amount: 200,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Desk',
      amount: 1500,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
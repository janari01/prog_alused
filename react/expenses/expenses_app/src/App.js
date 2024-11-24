import './App.css';
import NewExpense from './components/NewExpense/newExpense';
import Expenses from "./components/Expenses/Expenses";
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
      id: 'id1',
      date: new Date(2023, 0, 10),
      title:'New book',
      price: 30.99
  },
  {
      id: 'id2',
      date: new Date(2023, 0, 5),
      title:'Icecream',
      price: 3.99
  },
  {
    id: 'id3',
    date: new Date(2024, 0, 8),
    title:'Random',
    price: 1.99
  }
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  function addExpenseHandler(expense) {
    console.log(expense)
    setExpenses(previousExpenses => {
      return [expense, ...previousExpenses]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

import './App.css';
import NewExpense from './components/NewExpense/newExpense';
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
        date: new Date(2023, 0, 10),
        title:'New book',
        price: 30.99
    },
    {
        date: new Date(2023, 0, 5),
        title:'Icecream',
        price: 3.99
    }
  ]

  function addExpenseHandler(expense) {
    console.log(expense)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

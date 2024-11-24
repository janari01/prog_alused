import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from 'react';
import './Expenses.css';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2023')
    function filterChangeHandler(selectedYear) {
        setSelectedYear(selectedYear)
    }

    // to display expense items that match the current selected year
    const filteredExpenses = props.expenses.filter(expense => 
        expense.date.getFullYear().toString() === selectedYear)

    
    

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
            {
            filteredExpenses.map(expense => <ExpenseItem key={expense.id} className='expense-item' expenseData={expense} />)
            }
        </Card>
    )
}

export default Expenses;
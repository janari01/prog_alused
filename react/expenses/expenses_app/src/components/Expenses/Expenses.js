import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from 'react';
import './Expenses.css';
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2023')
    function filterChangeHandler(selectedYear) {
        setSelectedYear(selectedYear)
    }

    // to display expense items that match the current selected year
    const filteredExpenses = props.expenses.filter(expense => 
        new Date(expense.date).getFullYear().toString() === selectedYear)

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    )
}

export default Expenses;
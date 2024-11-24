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
    console.log(selectedYear)

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
            <ExpenseItem className='expense-item' expenseData={props.expenses[0]}></ExpenseItem>
            <ExpenseItem className='expense-item' expenseData={props.expenses[1]}></ExpenseItem>
        </Card>
    )
}

export default Expenses;
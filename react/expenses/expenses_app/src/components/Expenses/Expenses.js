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
    
    

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
            {
            props.expenses.map(expense => <ExpenseItem key={expense.id} className='expense-item' expenseData={expense} />)
            }
        </Card>
    )
}

export default Expenses;
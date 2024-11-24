import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

function Expenses(props) {
    

    return (
        <Card className='expenses'>
            <ExpenseItem className='expense-item' expenseData={props.expenses[0]}></ExpenseItem>
            <ExpenseItem className='expense-item' expenseData={props.expenses[1]}></ExpenseItem>
        </Card>
    )
}

export default Expenses;
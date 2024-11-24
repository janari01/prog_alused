import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from "./ExpenseDate";
import { useState } from 'react';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.expenseData.title)

    function clickHandler() {
        console.log('click')
        setTitle(title)
        console.log(title)
    }
    const classes = 'card ' + props.className
    return (
        <Card className={classes}>
            <ExpenseDate date={props.expenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.price}€</div>
            </div>
            <button onClick={clickHandler}>Click me</button>
        </Card>
    )
}

export default ExpenseItem
import './ExpenseForm.css'
import { useState } from 'react'

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    function titleChangedHandler(e) {
        setEnteredTitle(e.target.value)
    }

    function amountChangeHandler(e) {
        setEnteredAmount(e.target.value)
    }

    function dateChangeHandler(e) {
        setEnteredDate(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        props.onCancel()
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' 
                    onChange={titleChangedHandler} 
                    value={enteredTitle}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Price</label>
                    <input type='number' min='0.01' step='0.01'
                    onChange={amountChangeHandler}
                    value={enteredAmount}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2023-01-01' max='2025-12-31'
                    onChange={dateChangeHandler}
                    value={enteredDate}
                    />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
                <button type='submit' onClick={props.onCancel}>Cancel</button>
            </div>

        </form>
    )
}

export default ExpenseForm
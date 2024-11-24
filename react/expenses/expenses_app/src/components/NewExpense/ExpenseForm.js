import './ExpenseForm.css'
import { useState } from 'react'

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredPrice, setEnteredPrice] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    function titleChangedHandler(e) {
        setEnteredTitle(e.target.value)
    }

    function priceChangeHandler(e) {
        setEnteredPrice(e.target.value)
    }

    function dateChangeHandler(e) {
        setEnteredDate(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault()
        const expenseData = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredPrice('')
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
                    onChange={priceChangeHandler}
                    value={enteredPrice}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2024-11-12' max='2026-01-31'
                    onChange={dateChangeHandler}
                    value={enteredDate}
                    />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>

        </form>
    )
}

export default ExpenseForm
import './ExpenseForm.css'
import { useState } from 'react'

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredPrice, setEnteredPrice] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    console.log(enteredTitle)
    console.log(enteredPrice)
    console.log(enteredDate)

    function titleChangedHandler(e) {
        setEnteredTitle(e.target.value)
    }

    function priceChangeHandler(e) {
        setEnteredPrice(e.target.value)
    }

    function dateChangeHandler(e) {
        setEnteredDate(e.target.value)
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangedHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Price</label>
                    <input type='number' min='0.01' step='0.01'
                    onChange={priceChangeHandler}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2024-11-12' max='2026-01-31'
                    onChange={dateChangeHandler}
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
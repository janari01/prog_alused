import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'
import { useState } from "react"

function NewExpense(props) {
    const [editForm, setEditForm] = useState(false) // add element or not, expanding window

    function validForm() {
        setEditForm(true)
    }

    function notValidForm() {
        setEditForm(false)
    }

    console.log(editForm)

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return (
        <div className="new-expense">
            {
            editForm && <ExpenseForm onCancel={notValidForm} onSaveExpenseData={saveExpenseDataHandler} />
            }
            {
            !editForm && <div className='new-expense__controls'>
                <div className='new-expense__actions'>
                    <button onClick={validForm} type='submit'>Add New Expense</button>
                </div>
            </div>
            }
        </div>
    )
}

export default NewExpense
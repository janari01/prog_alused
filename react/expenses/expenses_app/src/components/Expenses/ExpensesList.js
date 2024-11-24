import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

function ExpensesList(props) {
    if (!props.expenses.length) {
        return (
            <p className="expenses-list__fallback">No expenses found.</p>
        )
    }
    return (
        <>
            <ul className='expenses-list'>
            {
            props.expenses.length > 0 && props.expenses.map(expense => <ExpenseItem key={expense.id} className='expense-item' expenseData={expense} />)
            }
            </ul>
        </>
    )
}

export default ExpensesList
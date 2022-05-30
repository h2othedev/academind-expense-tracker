import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    const initialState = {
        title: '',
        amount: '',
        date: '',
    }
    const [ input, setInput ] = useState({
        ...initialState,
    })
    const handleChange = (e) => {
        setInput((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setInput({
            ...initialState,
        })
        console.log(input)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input name='title' type="text" value={input.title} onChange={handleChange} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input name='amount' type="number" min={0.01} step={0.01} value={input.amount} onChange={handleChange} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input name='date' type="date" min={'2022-01-01'} max={'2025-12-31'} value={input.date} onChange={handleChange} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
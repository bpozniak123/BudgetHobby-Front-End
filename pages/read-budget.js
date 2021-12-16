import React, { useState } from 'react'
import Link from 'next/link'

export default function GetBudget() {
  const [budgets, setBudgets] = useState([])
  // const handleChange = (e) => {
  //  setHobbyData({...getHobby, [e.target.name]: e.target.value});
  // }

  const resBudget = async event => {
    event.preventDefault()
    const readBudget = await fetch('http://localhost:8000/api/v1/budget/')
    const result = await readBudget.json()
    setBudgets(result)
  }

  const deleteBudget = async budgetId => {
    const del_budget = await fetch(`http://localhost:8000/api/v1/budget/${budgetId}`, {
      method: 'DELETE'
    })
    const get_data = await del_budget.json()
    console.log(get_data)
    const readBudget = await fetch('http://localhost:8000/api/v1/budget/')
    const result = await readBudget.json()
    setBudgets(result)
  }
  
  return (
    <>
    <h2>Get Budgets </h2>

      <button onClick={resBudget}>View Budgets</button>
      {budgets.map((budget) => {
        return (
          <div key={budget.id}>
          {budget.name}
      <button onClick={() => deleteBudget(budget.id)}>Delete</button>
          </div>
        )
      })}
    </>
  )
}
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Budget.module.css'

export default function GetBudget() {
  const [budgets, setBudgets] = useState([])
  const [budget, setBudget] = useState(null)
  const [showEditForm, setShowEditForm] = useState(false)
  // const handleChange = (e) => {
  //  setHobbyData({...getHobby, [e.target.name]: e.target.value});
  // }

    const [formData, setFormData] = useState({})


  const handleChange = (e) => {
    let copyFormData = {...formData, [e.target.name]: e.target.value}
    setFormData(copyFormData)
  }

  useEffect(() => console.log(formData), [formData]);

  const resBudget = async event => {
    event.preventDefault()
    const readBudget = await fetch('baseURL' + '/budget/')
    const result = await readBudget.json()
    setBudgets(result)
  }

  const deleteBudget = async budgetId => {
    const del_budget = await fetch('baseURL' + `/hobby/${budgetId}`, {
      method: 'DELETE'
    })
    const get_data = await del_budget.json()
    console.log(get_data)
    const readBudget = await fetch('baseURL' + '/budget/')
    const result = await readBudget.json()
    setBudgets(result)
  }

  const updateBudget = async event => {
    event.preventDefault()
    console.log(budgets)
    console.log(" ON UPDATE BUDGET")
    const update_budget = await fetch('baseURL' + `/budget/${budget.Id}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
    const get_data = await update_budget.json()
    console.log(get_data)
    const result = [...budgets]
    const foundIndex = result.findIndex((singleBudget) => {
      return singleBudget.id === budget.id 
    })
    result[foundIndex] = get_data.data
    setBudgets(result)
  }

  const showEdit = async budget => {
    setShowEditForm(true)
    setBudget(budget)
    setFormData({
      ...budget
    })
    console.log(budget)
  }
  
  return (
 
    <div className={styles.container}>
    <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Bungee&family=Gruppo&display=swap" rel="stylesheet"/>
    <h2>Get Budgets </h2>

      <Link href="/">
            <button type="button" className="btn btn-info">Back to Home</button>
      </Link>
      <button onClick={resBudget} className="btn btn-warning">View Budgets</button>
      {budgets.map((budget) => {
        return (
          <div key={budget.id}>
          {budget.name}
            <button onClick={() => deleteBudget(budget.id)} className="btn btn-danger">Delete</button>
            <button onClick={() => showEdit(budget)} className="btn btn-warning">Update</button>
          </div>
        )
      })}
      {showEditForm ? 
    <div className={styles.form}>
    <form onSubmit={updateBudget}>
    <p>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" onChange={handleChange} value={formData?.name} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="housing">Housing: </label>
      <input id="housing" name="housing" value={formData?.housing} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="transportation">Transportation: </label>
      <input id="transportation" name="transportation" value={formData?.transportation} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="grocery">Grocery: </label>
      <input id="grocery" name="grocery" value={formData?.grocery} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="utilities">Utilities: </label>
      <input id="utilities" name="utilities" value={formData?.utilities} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="phone">Phone: </label>
      <input id="phone" name="phone" value={formData?.phone} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="entertainment">Entertainment: </label>
      <input id="entertainment" name="entertainment" value={formData?.entertainment} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="hobby_name">Name of Hobby: </label>
      <input id="hobby_name" name="hobby_name" value={formData?.hobby_name} type="text" autoComplete="name" required />
    </p>
     <p>
      <label htmlFor="hobby_tools_cost">Cost of Hobby Tools: </label>
      <input id="hobby_tools_cost" name="hobby_tools_cost" value={formData?.hobby_tools_cost} type="text" autoComplete="name"/>
    </p>
     <p>
      <label htmlFor="hobby_gear_cost">Cost of Hobby Gear: </label>
      <input id="hobby_gear_cost" name="hobby_gear_cost" value={formData?.hobby_gear_cost} type="text" autoComplete="name"/>
    </p>
     <p>
      <label htmlFor="hobby_accessories_cost">Cost of Hobby Accessories: </label>
      <input id="hobby_accessories_cost" name="hobby_accessories_cost" value={formData?.hobby_accessories_cost} type="text" autoComplete="name"/>
    </p>
     <p>
      <label htmlFor="maintenance_cost">Maintenance Cost: </label>
      <input id="maintenance_cost" name="maintenance_cost" value={formData?.maintenance_cost} type="text" autoComplete="name"/>
    </p>
      <button type="submit" className="btn btn-warning">Update</button>
    </form>
    </div>
    : ''
  }
  </div>
  )
}
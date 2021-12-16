import React, { useState } from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

//CREATE Route
export default function BudgetForm() {
	const [formData, setFormData] = useState({
		budget: '',
	})
	const handleChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	}

  const addBudget = async event => {
    event.preventDefault()
    console.log(formData)
    const res = await fetch('/api/budgets', {
      body: JSON.stringify(
      	formData
      ),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    console.log(res)
    const result = await res.json()
  }

  return (
    <form onSubmit={addBudget}>
    <p>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" onChange={handleChange} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="housing">Housing: </label>
      <input id="housing" name="housing" type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="transportation">Transportation: </label>
      <input id="transportation" name="transportation" type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="grocery">Grocery: </label>
      <input id="grocery" name="grocery" type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="utilities">Utilities: </label>
      <input id="utilities" name="utilities" type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="phone">Phone: </label>
      <input id="phone" name="phone" type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="entertainment">Entertainment: </label>
      <input id="entertainment" name="entertainment" type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="hobby_name">Name of Hobby: </label>
      <input id="hobby_name" name="hobby_name" type="text" autoComplete="name" required />
    </p>
     <p>
      <label htmlFor="hobby_tools_cost">Cost of Hobby Tools: </label>
      <input id="hobby_tools_cost" name="hobby_tools_cost" type="text" autoComplete="name"/>
    </p>
     <p>
      <label htmlFor="hobby_gear_cost">Cost of Hobby Gear: </label>
      <input id="hobby_gear_cost" name="hobby_gear_cost" type="text" autoComplete="name"/>
    </p>
     <p>
      <label htmlFor="hobby_accessories_cost">Cost of Hobby Accessories: </label>
      <input id="hobby_accessories_cost" name="hobby_accessories_cost" type="text" autoComplete="name"/>
    </p>
     <p>
      <label htmlFor="maintenance_cost">Maintenance Cost: </label>
      <input id="maintenance_cost" name="maintenance_cost" type="text" autoComplete="name"/>
    </p>
      <button type="submit">Complete Budget</button>
      <Link href="/">
            <button type="button">Back to Home</button>
      </Link>
      <Link href="/read-budget">
            <button type="button">Update Budget</button>
      </Link>
    </form>
  )
}
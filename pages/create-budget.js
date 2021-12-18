import React, { useState } from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Budget.module.css'
import logo from '../public/HELPlogo.png'

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
    const res = await fetch('baseURL' + 'create-budget', {
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
    <div className={styles.container}>
    <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Bungee&family=Gruppo&display=swap" rel="stylesheet"/>
    <div className={styles.form}>
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

    <div className="btn-group" role="group" aria-label="Budget buttons">
      <button type="submit" className="btn btn-success">Complete Budget</button>
      <Link href="/">
            <button type="button" className="btn btn-info">Back to Home</button>
      </Link>
      <Link href="/read-budget">
            <button type="button" className="btn btn-warning">Update Budget</button>
      </Link>
      </div>
    </form>
    </div>
    </div>
  )
}
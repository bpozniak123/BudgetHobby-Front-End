import React, { useState } from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Hobby.module.css'
import logo from '../public/HELPlogo.png'


export default function HobbyForm() {
	const [formData, setFormData] = useState({
		hobby: '',
	})
	const handleChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	}

  const addHobby = async event => {
    event.preventDefault()
    console.log(formData)
    const res = await fetch(baseURL + '/hobby', {
      body: JSON.stringify(
        // hobby: event.target.hobby
      	// hobby: ''
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
    <form onSubmit={addHobby}>
    <p>
      <label htmlFor="hobby">Hobby: </label>
      <input id="hobby" name="hobby" onChange={handleChange} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="type_of_hobby">Type of Hobby: </label>
      <input id="type_of_hobby" name="type_of_hobby" onChange={handleChange} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="tools">Tools: </label>
      <input id="tools" name="tools" onChange={handleChange} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="cost_of_tools">Cost of Tools: </label>
      <input id="cost_of_tools" name="cost_of_tools" onChange={handleChange} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="gear">Gear: </label>
      <input id="gear" name="gear" onChange={handleChange} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="cost_of_gear">Cost of Gear: </label>
      <input id="cost_of_gear" name="cost_of_gear" onChange={handleChange} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="accessories">Accessories: </label>
      <input id="accessories" name="accessories" onChange={handleChange} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="cost_of_accessories">Cost of Accessories: </label>
      <input id="cost_of_accessories" name="cost_of_accessories" onChange={handleChange} type="text" autoComplete="name" required />
    </p>
      
      <div className="btn-group" role="group" aria-label="Hobby buttons">
        <button type="submit" className="btn btn-success">Add Hobby</button>
      
        <Link href="/">
          <button type="button" className="btn btn-info">Back to Home</button>
        </Link>
      
        <Link href="/read-hobby">
          <button type="button" className="btn btn-warning">Update Hobby</button>
        </Link>
      </div>
    </form>
     </div>
    </div>
  )
}




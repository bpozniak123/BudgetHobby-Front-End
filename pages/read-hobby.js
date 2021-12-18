import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Hobby.module.css'

export default function GetHobby() {
  const [hobbies, setHobbies] = useState([])
  const [showEditForm, setShowEditForm] = useState(false)
  const [hobby, setHobby] = useState(null)
  const [typeOfHobby, setTypeOfHobby] = useState(null)
  const [tools, setTools] = useState(null)
  const [costOfTools, setCostOfTools] = useState(null)
  const [gear, setGear] = useState(null)
  const [costOfGear, setCostOfGear] = useState(null)
  const [accessories, setAccessories] = useState(null)
  const [costOfAccessories, setCostOfAccessories] = useState(null)

  const [formData, setFormData] = useState({})


  const handleChange = (e) => {
    let copyFormData = {...formData, [e.target.name]: e.target.value}
    setFormData(copyFormData)
  }

  useEffect(() => console.log(formData), [formData]);

  const resHobby = async event => {
    event.preventDefault()
    const readHobby = await fetch(baseURL + '/read-hobby')
    const result = await readHobby.json()
    setHobbies(result)
  }

  const deleteHobby = async hobbyId => {
    const del_hobby = await fetch(baseURL + `/hobby/${hobbyId}`, {
      method: 'DELETE'
    })
    const get_data = await del_hobby.json()
    console.log(get_data)
    const readHobby = await fetch(baseURL + '/hobby/')
    const result = await readHobby.json()
    setHobbies(result)
  }

  const updateHobby = async event => {
    event.preventDefault()
    console.log(hobbies)
    console.log(" ON UPDATE HOBBIES")
    const update_hobby = await fetch(baseURL + `/hobby/${hobby.Id}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
    const get_data = await update_hobby.json()
    console.log(get_data)
    const result = [...hobbies]
    const foundIndex = result.findIndex((singleHobby) => {
      return singleHobby.id === hobby.id 
    })
    result[foundIndex] = get_data.data
    setHobbies(result)
  }

  const showEdit = async hobby => {
    setShowEditForm(true)
    setHobby(hobby)
    setFormData({
      ...hobby
    })
    console.log(hobby)
  }
  
  return (

    <div className={styles.container}>
    <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Bungee&family=Gruppo&display=swap" rel="stylesheet"/>

    <h2 className={styles.titleHome}>Hobbies Homepage </h2>

      <Link href="/">
        <button type="button" className="btn btn-info">Back to Home</button>
      </Link>
      <button onClick={resHobby} className="btn btn-warning">View Hobbies</button>
      {hobbies.map((hobby) => {
        return (
          <div key={hobby.id}>
          {hobby.hobby}
            <button onClick={() => deleteHobby(hobby.id)} className="btn btn-danger">Delete</button>
            <button onClick={() => showEdit(hobby)} className="btn btn-warning">Update</button>
          </div>
        )
      })}
    {showEditForm ? 
  <div className={styles.form}>
  <form onSubmit={updateHobby}>
   <p>
      <label htmlFor="hobby">Hobby: </label>
      <input id="hobby" name="hobby" onChange={handleChange} value={formData?.hobby} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="type_of_hobby">Type of Hobby: </label>
      <input id="type_of_hobby" name="type_of_hobby"  onChange={handleChange} value={formData?.type_of_hobby} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="tools">Tools: </label>
      <input id="tools" name="tools" onChange={handleChange} value={formData?.tools} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="cost_of_tools">Cost of Tools: </label>
      <input id="cost_of_tools" name="cost_of_tools" onChange={handleChange} value={formData?.cost_of_tools} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="gear">Gear: </label>
      <input id="gear" name="gear" onChange={handleChange} value={formData?.gear} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="cost_of_gear">Cost of Gear: </label>
      <input id="cost_of_gear" name="cost_of_gear" onChange={handleChange} value={formData?.cost_of_gear} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="accessories">Accessories: </label>
      <input id="accessories" name="accessories" onChange={handleChange} value={formData?.accessories} type="text" autoComplete="name" required />
    </p>
    <p>
      <label htmlFor="cost_of_accessories">Cost of Accessories: </label>
      <input id="cost_of_accessories" name="cost_of_accessories" onChange={handleChange} value={formData?.cost_of_accessories} type="text" autoComplete="name" required />
    </p>
      <button type="submit" className="btn btn-warning">Update</button>
  </form>
  </div>
  : ''
}
  </div>
  )
}
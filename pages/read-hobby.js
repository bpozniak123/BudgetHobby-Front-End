import React, { useState } from 'react'
import Link from 'next/link'

export default function GetHobby() {
	const [hobbies, setHobbies] = useState([])
	// const handleChange = (e) => {
	// 	setHobbyData({...getHobby, [e.target.name]: e.target.value});
	// }

  const resHobby = async event => {
    event.preventDefault()
    const readHobby = await fetch('http://localhost:8000/api/v1/hobby/')
    const result = await readHobby.json()
    setHobbies(result)
  }

  const deleteHobby = async hobbyId => {
    const del_hobby = await fetch(`http://localhost:8000/api/v1/hobby/${hobbyId}`, {
      method: 'DELETE'
    })
    const get_data = await del_hobby.json()
    console.log(get_data)
    const readHobby = await fetch('http://localhost:8000/api/v1/hobby/')
    const result = await readHobby.json()
    setHobbies(result)
  }

  const updateHobby = async hobbyId => {
    const update_hobby = await fetch(`http://localhost:8000/api/v1/hobby/${hobbyId}`, {
      method: 'PUT'
    })
    const get_data = await update_hobby.json()
    console.log(get_data)
    const readHobby = await fetch('http://localhost:8000/api/v1/hobby/')
    const result = await readHobby.json()
    setHobbies(result)
  }
  
  return (
  	<>
  	<h2>Get Hobby </h2>

  		<button onClick={resHobby}>View Hobby</button>
  		{hobbies.map((hobby) => {
  			return (
  				<div key={hobby.id}>
  				{hobby.hobby}
  		<button onClick={() => deleteHobby(hobby.id)}>Delete</button>
  		<button onClick={() => updateHobby(hobby.id)}>Update</button>
  				</div>


  			)
  		})}

 {/* return (
 	<form onSubmit={updateHobby}>
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
      <button onClick={() => updateHobby(hobby.id)}>Update</button>
  </form>
  )*/}
  </>
  )
}
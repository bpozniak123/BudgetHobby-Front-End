import React, { useState } from 'react'
import { useState } from 'react'

function GetBudget() {
	const [budget, setBudget] = useState([])
	const [budget, setBudget] = useState('')

	const fetchBudget = async () => {
		const res = await fetch('http://localhost:8000/api/v1/budget/')
		const data = await response.json()
		setBudget(data)
	}

	const submitBudget = async () => {
		const response = await fetch('api/budgets-test', {
			method: 'POST',
			body: JSON.stringify({ budget }),
			headers: {
				'Content-Type': 'application/json', 
			},
		})
		const data = await response.json()
		console.log(data)
	}

	return (
		<>
			<input
				type='text'
				value={budget}
				onChange={(e) => setBudget(e.target.value)}
			/>
			<button onClick={submitBudget>Submit Budget</button>
			<button onClick={fetchBudget}>Get Budget</button>
			{budget.map((budget) => {
				return (
					<div key={budget.id}>
						{budget.id} {budget.text}
					</div>
				)
			})}
		</>
	)
}

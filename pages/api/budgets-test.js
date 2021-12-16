import { budget } from '../../budget-test'

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(budget)
  } else if (req.method === 'POST') {
    const budget = req.body.budget
    const newBudget = {
      id: Date.now(),
      text: ''
    }
  }
}
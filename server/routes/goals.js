const express = require('express')

// eslint-disable-next-line no-unused-vars
const db = require('../db/db')

const router = express.Router()

//GET
router.get('/', (req, res) => {
  db.getAllGoals()
    .then((goals) => {
      res.json(goals)
    })
    .catch((error) => {
      res.status(500).json({ error: error.message })
    })
})

//POST
router.post('/', async (req, res) => {
  try {
    const input = req.body
    input.date = new Date()
    const dbResponse = await db.addGoal(input)
    const id = dbResponse[0]
    const newGoal = await db.getGoalById(id.id ? id.id : id)
    return res.json(newGoal)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

//PATCH
router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const newDetails = req.body
    await db.updateGoal(id, newDetails)
    const updatedGoal = await db.getGoalById(id)
    return res.json(updatedGoal)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteGoal(id)
    const allGoals = await db.getAllGoals()
    return res.json(allGoals)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router

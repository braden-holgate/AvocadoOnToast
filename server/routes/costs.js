const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getAllItems()
    .then((items) => res.json(items))
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

module.exports = router

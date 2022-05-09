const express = require('express')
const path = require('path')

const server = express()

// const db = require('./db/db')
// const goals = require('./routes/goals')
// server.use('/api/v1/goals', goals)

// server.get('/api/v1/costs/', (req, res) => {
//   db.getAllItems()
//     .then((items) => res.json(items))
//     .catch((err) => {
//       res.status(500).json({ message: err.message })
//     })
// })

const costsRoute = require('./routes/costs')
const goalsRoute = require('./routes/goals')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/costs', costsRoute)
server.use('/api/v1/goals', goalsRoute)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server

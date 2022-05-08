const conn = require('./connection')

function getAllItems(db = conn) {
  return db('costs')
}

function getAllGoals(db = conn) {
  return db('Goals')
}

function getGoalById(id, db = conn) {
  return db('Goals').where('id', id).select().first()
}

function addGoal(newGoal, db = conn) {
  return db('Goals').insert(newGoal)
}

function updateGoal(id, newInfo, db = conn) {
  return db('Goals').where('id', id).update(newInfo)
}

function deleteGoal(id, db = conn) {
  return db('Goals').where('id', id).del()
}

module.exports = {
  getAllItems,
  getAllGoals,
  getGoalById,
  addGoal,
  updateGoal,
  deleteGoal,
}

const conn = require('./connection')

function getAllItems (db = conn) {
  return db('costs')
}

module.exports = {
  getAllItems
}

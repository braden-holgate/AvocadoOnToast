exports.up = function (knex) {
  return knex.schema.createTable('Goals', function (table) {
    table.increments('id')
    table.string('goal')
    table.string('author')
    table.integer('rating')
    table.datetime('date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('Goals')
}

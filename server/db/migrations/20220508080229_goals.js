exports.up = function (knex) {
  return knex.schema.createTable('goals', function (table) {
    table.increments('id')
    table.string('content')
    table.string('author')
    table.integer('rating')
    table.string('date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('goals')
}

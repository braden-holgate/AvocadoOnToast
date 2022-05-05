exports.up = function (knex) {
  return knex.schema.createTable('Costs', function (table) {
    table.increments('id')
    table.string('item')
    table.decimal('cost')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('Costs')
}

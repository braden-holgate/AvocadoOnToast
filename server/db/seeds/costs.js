exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('costs').del()
    .then(function () {
      // Inserts seed entries
      return knex('costs').insert([
        { id: 1, item: 'Coffee', cost: 5.00 },
        { id: 2, item: 'Eating Out', cost: 20.00 }
      ])
    })
}

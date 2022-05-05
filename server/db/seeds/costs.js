exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Costs').del()
    .then(function () {
      // Inserts seed entries
      return knex('Costs').insert([
        { id: 1, item: 'coffee', cost: 5.00 },
        { id: 2, item: 'eatingOut', cost: 20.00 }
      ])
    })
}

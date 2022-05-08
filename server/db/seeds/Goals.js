exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Goals')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('Goals').insert([
        {
          id: 1,
          goal: `save an extra 2% per year by cancelling Netflix`,
          author: `Barat`,
          rating: `5`,
          date: `08052022`,
        },
        {
          id: 2,
          goal: 'Make coffee at home to save $15 per week',
          author: 'Sierra',
          rating: 4,
          date: 10042022,
        },
        {
          id: 3,
          goal: 'Move to a city with lower rents and less commuting time.',
          author: 'Jin',
          rating: 5,
          date: 10052022,
        },
        {
          id: 4,
          goal: 'Shop around for better rates on my mortgage',
          author: 'Mavis',
          rating: 5,
          date: 12032022,
        },
      ])
    })
}

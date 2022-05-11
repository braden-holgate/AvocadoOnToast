exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('goals')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('goals').insert([
        {
          id: 1,
          content: `Save an extra 2% per year by cancelling Netflix`,
          author: `Barat`,
          rating: 5,
          date: new Date(Date.now()),
        },
        {
          id: 2,
          content: 'Make coffee at home to save $15 per week',
          author: 'Sierra',
          rating: 4,
          date: new Date(Date.now()),
        },
        {
          id: 3,
          content: 'Move to a city with lower rents and less commuting time.',
          author: 'Jin',
          rating: 5,
          date: new Date(Date.now()),
        },
      ])
    })
}

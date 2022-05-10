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
          date: 1651579200000,
        },
        {
          id: 2,
          content: 'Make coffee at home to save $15 per week',
          author: 'Sierra',
          rating: 4,
          date: 1651665600000,
        },
        {
          id: 3,
          content: 'Move to a city with lower rents and less commuting time.',
          author: 'Jin',
          rating: 5,
          date: 1651752000000,
        },
        {
          id: 4,
          content: 'Shop around for better rates on my mortgage',
          author: 'Mavis',
          rating: 5,
          date: 1651838400000,
        },
      ])
    })
}

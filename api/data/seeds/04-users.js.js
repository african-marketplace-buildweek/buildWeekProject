
const users = [
  { 
    username: 'harry',
    password: '1234',
    user_picture: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg'
  },
  { 
    username: 'hermione',
    password: '1234',
    user_picture: 'https://static.wikia.nocookie.net/characters/images/a/a5/Latest_%2810%29.jpg/revision/latest?cb=20141230074301'
  },
]

exports.users = users

exports.seed = function(knex) {
  return knex('users').insert(users)
}

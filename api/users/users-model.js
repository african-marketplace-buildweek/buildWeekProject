const db = require('../data/db-config')

function getAllUsers() { return db('users') }

async function insertUser(user) {
  // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
  const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
  return newUserObject
}

function findUserBy(filter) {
  return db('users')
    .where(filter)
}

function returnUserDummyData() {
    const userDummyData =   [
      { 
        username: 'harry',
        password: '1234',
        user_picture: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg'
      },
      { 
        username: 'hermione',
        password: '1234',
        user_picture: 'https://static.wikia.nocookie.net/characters/images/a/a5/Latest_%2810%29.jpg/revision/latest?cb=20141230074301'
      }
    ]
    return userDummyData
}

module.exports = {
    getAllUsers,
    insertUser,
    findUserBy,
    returnUserDummyData
}
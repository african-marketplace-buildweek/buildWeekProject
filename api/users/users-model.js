const db = require('../data/db-config')

function getAllUsers() { return db('users') }

async function insertUser(user) {
  // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
  const [newUserObject] = await db('users')
    .insert(user, ['user_id', 'username', 'password', 'user_picture'])
  return newUserObject
}

function findUserBy(filter) {
  return db('users')
    .where(filter)
}

function findUserById(id) {
  return db('users')
      .where('user_id', id)
      .first()
}

async function updateUser(id, user) {
  const [updatedUser] = await db('users')
      .update(user, ['user_id', 'username', 'user_picture'])
      .where('user_id', id)
  return updatedUser
}

async function deleteUser(id) {
  const userToBeDeleted = await findUserById(id)
  await db('users')
      .where('user_id', id)
      .del()
  return userToBeDeleted
}

function returnUserDummyData() {
    const userDummyData =   [
      { 
        username: 'harry',
        password: '1234',
        user_picture: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg',
        market_id: 1
      },
      { 
        username: 'hermione',
        password: '1234',
        user_picture: 'https://static.wikia.nocookie.net/characters/images/a/a5/Latest_%2810%29.jpg/revision/latest?cb=20141230074301',
        market_id: 2
      }
    ]
    return userDummyData
}

module.exports = {
    getAllUsers,
    insertUser,
    findUserBy,
    findUserById,
    updateUser,
    deleteUser,
    returnUserDummyData
}
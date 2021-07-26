const router = require('express').Router()
const Users = require('../users/users-model')
const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const { jwtSecret } = require('../secrets/index')

router.post('/register', async (req, res, next) => {
  try {
    const { username, password, user_picture } = req.body
    const rounds = process.env.BCRYPT_ROUNDS || 8
    const hash = bcrypt.hashSync(password, rounds)
    const newUser = {
      username: username,
      password: hash,
      user_picture: user_picture
    }

    const dbUser = await Users.insertUser(newUser)
    res.status(201).json(dbUser)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const user = await Users.findBy()
    res.json(user)
  } catch (err) {
    next(err)
  }
})

module.exports = router
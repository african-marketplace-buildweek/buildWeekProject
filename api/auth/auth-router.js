const router = require('express').Router()
const Users = require('../users/users-model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../secrets/index')
const { checkUsernameExists, checkUsernameAndPassword } = require('../auth/auth-middleware')

router.post('/register', checkUsernameAndPassword, async (req, res, next) => {
  try {
    const { username, password, user_picture } = req.body
    // const rounds = process.env.BCRYPT_ROUNDS || 8
    const rounds = 8
    const hash = bcrypt.hashSync(password, rounds)
    const newUser = {
      username: username,
      password: hash,
      user_picture: user_picture,
    }

    const dbUser = await Users.insertUser(newUser)
    res.status(201).json(dbUser)
  } catch (err) {
    next(err)
  }
})

router.post("/login", checkUsernameAndPassword, checkUsernameExists, (req, res, next) => {
  if (bcrypt.compareSync(req.body.password, req.user.password)) {
    const token = buildToken(req.user)
    res.json({
      message: `${req.user.username} is back!`,
      token
    })
  } else {
    next({
      status: 401,
      message: 'Invalid credentials'
    })
  }
})

function buildToken(user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
  }
  const options = {
    expiresIn: '1d',
  }
  return jwt.sign(payload, jwtSecret, options)
}

module.exports = router
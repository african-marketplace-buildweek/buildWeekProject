const { findUserBy } = require('../users/users-model')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../secrets/index')

const restricted = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
      return next({
        status: 401,
        message: 'Token required'
      })
    }
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        return next({
          status: 401,
          message: 'Token invalid'
        })
      }
      req.decodedToken = decodedToken
      next()
    })
}

const checkUsernameExists = async (req, res, next) => {
    try {
      const [user] = await findUserBy({ 
        username: req.body.username
      })
      if (!user) {
        next({
          status: 401,
          message: 'Invalid credentials'
        })
      } else {
        req.user = user
        next()
      }
    } catch (err) {
      next(err)
    }
}

module.exports = {
    checkUsernameExists,
    restricted
}
const router = require('express').Router()
const Users = require('./auth-model')

router.get('/', async (req, res, next) => {
  try {
    const user = await Users.findBy()
    res.json(user)
  } catch (err) {
    next(err)
  }
})

module.exports = router
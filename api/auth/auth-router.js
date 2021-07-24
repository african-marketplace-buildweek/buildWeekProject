const router = require('express').Router()
const Users = require('./auth-model')

router.get('/api/auth', async (req, res, next) => {
  try {
    const games = await Users.findBy()
    res.json(games)
  } catch (err) {
    next(err)
}
  })

module.exports = router
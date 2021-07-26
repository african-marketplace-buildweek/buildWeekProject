const router = require('express').Router()

const Users = require('./users-model')

router.get('/', async (req, res) => {
    res.json(await Users.getAllUsers())
  })

router.get('/userDummyData', async (req, res, next) => {
    try {
        const users = await Users.returnUserDummyData()
        res.json(users)
    } catch (err) {
        next(err)
    }
})
  
router.post('/', async (req, res) => {
    res.status(201).json(await Users.insertUser(req.body))
})

module.exports = router
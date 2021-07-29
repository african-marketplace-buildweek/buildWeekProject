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

router.put('/:id', async (req, res, next) => {
    try {
        const updatedUser = await Users.updateUser(req.params.id, req.body)
        res.json(updatedUser)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const userToDelete = await Users.deleteUser(req.params.id)
        res.json(userToDelete)
    } catch (err) {
        next(err)
    }
})

module.exports = router
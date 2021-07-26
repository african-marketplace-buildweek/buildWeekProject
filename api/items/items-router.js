const router = require('express').Router()
const Items = require('./items-model')

router.get('/', async (req, res, next) => {
    try {
        const item = await Items.findItems()
        res.json(item)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const item = await Items.findItemById()
        res.json(item)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const item = await Items.insertItem()
        res.json(item)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const item = await Items.updateItem()
        res.json(item)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const item = await Items.deleteItem()
        res.json(item)
    } catch (err) {
        next(err)
    }
})

module.exports = router

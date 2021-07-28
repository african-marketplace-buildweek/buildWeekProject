const router = require('express').Router()
const Items = require('./items-model')
const { restricted } = require('../auth/auth-middleware')

router.get('/', async (req, res, next) => {
    try {
        const items = await Items.findItems()
        res.json(items)
    } catch (err) {
        next(err)
    }
})

router.get('/itemDummyData', async (req, res, next) => {
    // try {
    //     res.status(201).json(await Items.insertItem(req.body))
    // } catch (err) {
    //     next(err)
    // }
    try {
        const item = await Items.returnItemDummyData()
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

router.post('/', restricted, async (req, res, next) => {
    try {
        res.status(201).json(await Items.insertItem(req.body))
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
        const itemToDelete = await Items.deleteItem(req.params.id)
        res.json(itemToDelete)
    } catch (err) {
        next(err)
    }
})

module.exports = router

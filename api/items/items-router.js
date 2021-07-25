const router = require('express').Router()
const Items = require('./items-model')

router.get('/'), async (req, res, next) => {
    try {
        const item = await Items.findItemBy()
        res.json(item)
    } catch (err) {
        next(err)
    }
}

module.exports = router
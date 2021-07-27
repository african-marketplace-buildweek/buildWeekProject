const router = require('express').Router()
const Markets = require('./markets_model')

router.get('/', async (req, res, next) => {
    try {
        const markets = await Markets.findMarkets()
        res.json(markets)
    } catch (err) {
        next(err)
    }
})

module.exports = router
const db = require('../data/db-config')

function findMarkets() {
    return db('markets')
}

module.exports = {
    findMarkets
}
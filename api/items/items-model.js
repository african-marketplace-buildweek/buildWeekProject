const db = require('../data/db-config')

function findItems() {
    return db('items')
}

function findItemById() {
    return 'findItemById wired'
}

function insertItem() {
    return 'addItem wired'
}

function updateItem() {
    return 'updateItem wired'
}

function deleteItem() {
    return 'deleteItem wired'
}

module.exports = {
    findItems,
    findItemById,
    insertItem,
    updateItem,
    deleteItem
}
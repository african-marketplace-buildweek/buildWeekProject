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

function returnItemDummyData() {
    const itemDummyData =   [
      { 
        username: 'harry',
        password: '1234',
        user_picture: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg'
      },
      { 
        username: 'hermione',
        password: '1234',
        user_picture: 'https://static.wikia.nocookie.net/characters/images/a/a5/Latest_%2810%29.jpg/revision/latest?cb=20141230074301'
      }
    ]
    return itemDummyData
}

module.exports = {
    findItems,
    findItemById,
    insertItem,
    updateItem,
    deleteItem,
    returnItemDummyData
}
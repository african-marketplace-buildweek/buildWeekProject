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
            item_name: 'Eggs',
            item_category: 'Animal Products',
            item_price: 2,
            item_description: 'Fresh, organic, cage-free eggs'
          },
          { 
            item_name: 'Agwedde Beans',
            item_category: 'Beans',
            item_price: 1,
            item_description: 'Flavorful, locally-grown, cage-free beans'
          },
          { 
            item_name: 'Cabbages',
            item_category: 'Vegetable',
            item_price: 1.5,
            item_description: 'Crisp, round, cage-free cabbages'
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
const db = require('../data/db-config')

function findItems() {
    return db('items')
}

function findItemById(id) {
    return db('items')
        .where('item_id', id)
        .first()
}

async function insertItem(item) {
    const [newItem] = await db('items')
        .insert(item, ['item_id', 'item_name', 'item_category', 'item_price', 'item_description'])
    return newItem
}

async function updateItem(id, item) {
    const [updatedItem] = await db('items')
        .update(item, ['item_id', 'item_name', 'item_category', 'item_price', 'item_description'])
        .where('item_id', id)
    return updatedItem
}

async function deleteItem(id) {
    const itemToBeDeleted = await findItemById(id)
    await db('items')
        .where('item_id', id)
        .del()
    return itemToBeDeleted
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
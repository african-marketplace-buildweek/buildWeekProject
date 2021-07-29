
const items = [
  { 
    item_name: 'Eggs',
    item_category: 'Animal Products',
    item_price: 2,
    item_description: 'Fresh, organic, cage-free eggs',
    market_id: 1
  },
  { 
    item_name: 'Agwedde Beans',
    item_category: 'Beans',
    item_price: 1,
    item_description: 'Flavorful, locally-grown, cage-free beans',
    market_id: 2
  },
  { 
    item_name: 'Cabbages',
    item_category: 'Vegetable',
    item_price: 1.5,
    item_description: 'Crisp, round, cage-free cabbages',
    market_id: 3
  },

]

exports.items = items

exports.seed = function(knex) {
  return knex('items').insert(items)
}
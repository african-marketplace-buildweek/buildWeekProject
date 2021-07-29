
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
  { 
    item_name: 'Chilies',
    item_category: 'Vegetable',
    item_price: 5.30,
    item_description: 'Crisp, round, cage-free chilies',
    market_id: 5
  },
  { 
    item_name: 'Tilapia',
    item_category: 'Animal products',
    item_price: 1.5,
    item_description: 'Crisp, round, cage-free tilapia',
    market_id: 4
  },
  { 
    item_name: 'Beans Canadian',
    item_category: 'Beans',
    item_price: 1.7,
    item_description: 'Straight from the Canadian beanery',
    market_id: 4
  },
  { 
    item_name: 'Sorghum',
    item_category: 'Sorghum',
    item_price: 12,
    item_description: 'This will give you sore gums for sure',
    market_id: 5
  },
  { 
    item_name: 'Imported Rice',
    item_category: 'Rice',
    item_price: 13,
    item_description: 'Imported from where? You will never know',
    market_id: 1
  },
  { 
    item_name: 'Kaylso Rice',
    item_category: 'Rice',
    item_price: 1.5,
    item_description: 'Kaylso appreciates your patronage',
    market_id: 2
  },
  { 
    item_name: 'Old Beans',
    item_category: 'Beans',
    item_price: 6.7,
    item_description: 'Freshly retired',
    market_id: 5
  },

]

exports.items = items

exports.seed = function(knex) {
  return knex('items').insert(items)
}

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
  { 
    item_name: 'Goat Meat',
    item_category: 'Animal Products',
    item_price: 17,
    item_description: 'The greatest of all time',
    market_id: 1
  },
  { 
    item_name: 'Dry Maize',
    item_category: 'Maize',
    item_price: 3,
    item_description: 'Have a glass of water ready',
    market_id: 1
  },
  { 
    item_name: 'Green Maize',
    item_category: 'Maize',
    item_price: 2,
    item_description: 'It\'s not easy being green',
    market_id: 2
  },
  { 
    item_name: 'Wheat',
    item_category: 'Wheat',
    item_price: .5,
    item_description: 'It\'s s-wheat ;)',
    market_id: 2
  },
  { 
    item_name: 'Avocado',
    item_category: 'Fruits',
    item_price: 6,
    item_description: 'Grab yer toast',
    market_id: 3
  },
  { 
    item_name: 'Apple Bananas',
    item_category: 'Fruits',
    item_price: 4.5,
    item_description: 'Two for the price of one',
    market_id: 3
  },
  { 
    item_name: 'Unprocessed Vanilla',
    item_category: 'Animal Products',
    item_price: 12,
    item_description: 'Still unfinis-',
    market_id: 4
  },
  { 
    item_name: 'Sweet Potatoes',
    item_category: 'Roots & Tubers',
    item_price: 2.5,
    item_description: 'They give the nicest compliments',
    market_id: 4
  },
  { 
    item_name: 'Ground Nuts',
    item_category: 'Nuts',
    item_price: 2,
    item_description: 'They were found on the ground',
    market_id: 5
  },
  { 
    item_name: 'Onions',
    item_category: 'Vegetables',
    item_price: 2.3,
    item_description: 'Get ready to cry tears of joy',
    market_id: 5
  },
  { 
    item_name: 'Tomatos',
    item_category: 'Fruit',
    item_price: 2,
    item_description: 'From my head',
    market_id: 5
  },

]

exports.items = items

exports.seed = function(knex) {
  return knex('items').insert(items)
}
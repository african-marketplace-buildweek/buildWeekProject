
const markets = [
  { 
    market_name: 'South Africa'
  },
  { 
    market_name: 'Middle Africa'
  },
  { 
    market_name: 'East Africa'
  },
  { 
    market_name: 'West Africa'
  },
  { 
    market_name: 'North Africa'
  },
]

exports.markets = markets

exports.seed = function(knex) {
  return knex('markets').insert(markets)
}

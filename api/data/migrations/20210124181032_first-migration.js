exports.up = async (knex) => {
  await knex.schema
    .createTable('markets', (markets) => {
      markets.increments('market_id')
      markets.string('market_name', 200).notNullable()
      // markets.integer('user_id')
      // .unsigned()
      // .references('user_id')
      // .inTable('users')
      // .onUpdate('RESTRICT')
      // .onDelete('RESTRICT')
    })

    .createTable('items', (items) => {
      items.increments('item_id')
      items.string('item_name', 200).notNullable()
      items.string('item_category').notNullable()
      items.float('item_price').notNullable()
      items.string('item_description', 300).notNullable()
      items.integer('market_id')
        .unsigned()
        .references('market_id')
        .inTable('markets')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
    })

    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable().unique()
      users.string('password', 200).notNullable()
      users.string('user_picture')
      users.timestamps(false, true)
      users.integer('market_id')
        .unsigned()
        .references('market_id')
        .inTable('markets')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
    })
    
    .createTable('users_items', (users_items) => {
      users_items.increments('users_items_id')
      users_items.integer('user_id')
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
      users_items.integer('item_id')
        .unsigned()
        .references('item_id')
        .inTable('items')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
    })
}

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('users_items')
    .dropTableIfExists('users')
    .dropTableIfExists('items')
    .dropTableIfExists('markets')
}

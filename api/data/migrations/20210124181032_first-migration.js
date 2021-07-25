exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable().unique()
      users.string('password', 200).notNullable()
      users.string('user_picture')
      users.timestamps(false, true)
    })

    .createTable('items', (items) => {
      items.increments('item_id')
      items.string('item_name', 200).notNullable()
      items.string('item_category').notNullable()
      items.float('item_price').notNullable()
      items.string('item_description', 300).notNullable()
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
    .dropTableIfExists('items')
    .dropTableIfExists('users')
}

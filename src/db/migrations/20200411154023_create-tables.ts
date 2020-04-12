import * as Knex from 'knex'

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('User', table => {
    table.increments('id').primary()
    table.string('firstName', 128)
    table.string('lastName', 128)
  })

  await knex.schema.createTable('Post', table => {
    table.increments('id').primary()
    table
      .integer('idUser')
      .unsigned()
      .references('User.id')
      .onDelete('CASCADE')
    table.string('title', 256)
    table.text('content')
  })

  await knex.schema.createTable('Comment', table => {
    table.increments('id').primary()
    table
      .integer('idPost')
      .unsigned()
      .references('Post.id')
      .onDelete('CASCADE')
    table
      .integer('idUser')
      .unsigned()
      .references('User.id')
      .onDelete('CASCADE')
    table.text('content')
  })
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('Comment')
  await knex.schema.dropTable('Post')
  await knex.schema.dropTable('User')
}

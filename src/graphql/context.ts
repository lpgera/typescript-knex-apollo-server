import Knex from '../db/knex'

export type Context = {
  knex: typeof Knex
}

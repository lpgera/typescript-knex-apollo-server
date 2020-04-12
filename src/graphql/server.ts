import { ApolloServer } from 'apollo-server'
import { gql } from 'apollo-server'
import knex from '../db/knex'
import * as user from './definitions/user'
import * as post from './definitions/post'
import * as comment from './definitions/comment'
import { Context } from './context'

const baseTypeDefs = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`

const definitions = [user, post, comment]

export default new ApolloServer({
  typeDefs: [baseTypeDefs, ...definitions.map(d => d.typeDefs)],
  resolvers: definitions.map(d => d.resolvers),
  context: (): Context => ({
    knex,
  }),
})

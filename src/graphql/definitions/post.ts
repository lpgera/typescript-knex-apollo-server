import { gql } from 'apollo-server'
import { Resolvers } from '../resolvers.gen'

export const typeDefs = gql`
  type Post {
    id: Int!
    idUser: Int!
    title: String!
    content: String!
  }

  extend type Query {
    post(id: Int!): Post
    posts: [Post!]!
  }

  extend type User {
    posts: [Post!]!
  }
`

export const resolvers: Resolvers = {
  Query: {
    post: async (_, { id }, { knex }) => {
      return knex('Post').where({ id }).first()
    },
    posts: async (_, __, { knex }) => {
      return knex('Post')
    },
  },
  User: {
    posts: async ({ id }, _, { knex }) => {
      return knex('Post').where({ idUser: id })
    },
  },
}

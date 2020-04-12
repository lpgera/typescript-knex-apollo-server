import { gql } from 'apollo-server'
import { Resolvers } from '../resolvers.gen'

export const typeDefs = gql`
  type Comment {
    id: Int!
    idUser: Int!
    idPost: Int!
    content: String!
  }

  extend type Query {
    comment(id: Int): Comment
    comments: [Comment!]!
  }

  extend type User {
    comments: [Comment!]!
  }

  extend type Post {
    comments: [Comment!]!
  }
`

export const resolvers: Resolvers = {
  Query: {
    comment: async (_, { id }, { knex }) => {
      return knex('Comment').where({ id }).first()
    },
    comments: async (_, __, { knex }) => {
      return knex('Comment')
    },
  },
  User: {
    comments: async ({ id }, _, { knex }) => {
      return knex('Comment').where({ idUser: id })
    },
  },
  Post: {
    comments: async ({ id }, _, { knex }) => {
      return knex('Comment').where({ idPost: id })
    },
  },
}

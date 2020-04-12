import { gql } from 'apollo-server'
import { Resolvers } from '../resolvers.gen'

export const typeDefs = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    fullName: String!
  }

  extend type Query {
    user(id: Int!): User
    users: [User!]!
  }

  extend type Post {
    user: User!
  }

  extend type Comment {
    user: User!
  }
`

export const resolvers = {
  Query: {
    user: async (_, { id }, { knex }) => {
      return knex('User')
        .where({ id })
        .first()
    },
    users: async (_, __, { knex }) => {
      return knex('User')
    },
  },
  User: {
    fullName: ({ firstName, lastName }) => {
      return `${firstName} ${lastName}`
    },
  },
  Post: {
    user: async ({ idUser }, _, { knex }) => {
      return knex('User')
        .where({ id: idUser })
        .first()
    },
  },
  Comment: {
    user: async ({ idUser }, _, { knex }) => {
      return knex('User')
        .where({ id: idUser })
        .first()
    },
  },
} as Resolvers

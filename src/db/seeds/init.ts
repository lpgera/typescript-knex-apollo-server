import * as Knex from 'knex'
import faker from 'faker'

const numberOfUsers = 16
const numberOfPosts = 128
const numberOfComments = 1024

export async function seed(knex: Knex): Promise<any> {
  await knex.raw('SET FOREIGN_KEY_CHECKS=0')
  await knex('Comment').truncate()
  await knex('Post').truncate()
  await knex('User').truncate()
  await knex.raw('SET FOREIGN_KEY_CHECKS=1')

  const users = Array.from({ length: numberOfUsers }, () => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  }))

  const posts = Array.from({ length: numberOfPosts }, () => ({
    idUser: faker.random.number({ min: 1, max: numberOfUsers }),
    title: faker.lorem.words(5),
    content: faker.lorem.paragraph(3),
  }))

  const comments = Array.from({ length: numberOfComments }, () => ({
    idUser: faker.random.number({ min: 1, max: numberOfUsers }),
    idPost: faker.random.number({ min: 1, max: numberOfPosts }),
    content: faker.lorem.paragraph(1),
  }))

  for (const user of users) {
    await knex('User').insert(user)
  }
  for (const post of posts) {
    await knex('Post').insert(post)
  }
  for (const comment of comments) {
    await knex('Comment').insert(comment)
  }
}

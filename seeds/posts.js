const faker = require('faker')
const postNumber = 20

exports.seed = async (knex, Promise) => {
  return knex('posts').del()
  .then(() => {
      const posts = []

      for (let index = 0; index < postNumber; index += 1) {
        posts.push({
          titel: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          createdAt: faker.date.recent(),
          updatedAt: faker.date.recent(),
          deletedAt: faker.date.recent(),
          deleted: faker.random.boolean(),
        })
      }
      return knex('posts').insert(posts)
    })
}
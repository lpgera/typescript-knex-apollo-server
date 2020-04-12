import dotenv from 'dotenv'
import server from './src/graphql/server'

dotenv.config()

const port = parseInt(process.env.PORT || '4000')

server
  .listen({
    port,
  })
  .then(({ url }) => {
    console.log(`Server is listening on ${url}`)
  })
  .catch(console.error)

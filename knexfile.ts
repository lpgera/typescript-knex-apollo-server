import dotenv from 'dotenv'

dotenv.config()

if (
  !process.env.DB_HOST ||
  !process.env.DB_PORT ||
  !process.env.DB_USER ||
  !process.env.DB_NAME
) {
  throw new Error('Please configure the database environment variables first!')
}

export = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  seeds: {
    directory: './src/db/seeds',
  },
  migrations: {
    directory: './src/db/migrations',
  },
}

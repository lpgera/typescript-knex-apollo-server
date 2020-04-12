# typescript-knex-apollo-server

An example GraphQL server built with TypeScript, Knex.js and Apollo Server

## Setup

### .env

Create a `.env` file based on the example below.

```dotenv
DB_HOST=localhost
DB_PORT=3306
DB_NAME=ts-gql
DB_USER=user
DB_PASSWORD=password
DB_ROOT_PASSWORD=root-password

PORT=3000
```

### Install dependencies and initialize database

```
npm i
npm run db-up
npx knex migrate:latest
npx knex seed:run
```

### Run project in development mode

```
npm run watch
```

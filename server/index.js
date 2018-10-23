const express = require('express')
const server = express()
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')

server.use('/graphql', graphqlHTTP({
    schema
}))

server.listen(8084, () => console.log('now listening on port 8084'))
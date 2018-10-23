const express = require('express')
const server = express()
const graphqlHTTP = require('express-graphql')

server.use('/graphql', graphqlHTTP({
    
}))

server.listen(8084, () => console.log('now listening on port 8084'))
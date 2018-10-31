const express = require('express')
const server = express()
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')


mongoose.connect('mongodb://guest:p4ssword@ds147073.mlab.com:47073/graphql-course')
let db = mongoose.connection

db.once('open', () => {
    console.log('connected to mlab')
})
server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

server.listen(8084, () => console.log('now listening on port 8084'))
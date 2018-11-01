const express = require('express')
const gqlServer = express()
const app = express()
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

app.use(express.static(__dirname + '/../client/dist'))
app.listen(8085, () => console.log('App now listening on port 8085'))

mongoose.connect('mongodb://guest:p4ssword@ds147073.mlab.com:47073/graphql-course')
let db = mongoose.connection

db.once('open', () => {
    console.log('connected to mlab')
})
gqlServer.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

gqlServer.listen(8084, () => console.log('GraphQL now listening on port 8084'))
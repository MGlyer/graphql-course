const graphql = require('graphql')
const _ = require('lodash')

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList} = graphql
const { Book, Author } = require('../models/models.js')

//dummy data
var books = [
  {name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorID: '1'},
  {name: 'The Final Empire', genre: 'Fantasy', id: '2', authorID: '2'},
  {name: 'The Long Earth', genre: 'Sci-fi', id: '3', authorID: '3'},
  {name: 'The Hero of Ages', genre: 'Fantasy', id: '4', authorID: '2'},
  {name: 'The Colour of Magic', genre: 'Fantasy', id: '5', authorID: '3'},
  {name: 'The Light Fantastic', genre: 'Fantasy', id: '6', authorID: '3'}
]

var authors = [
  {name: 'Patrick rothfuss', age: 44, id: '1'},
  {name: 'Brandon Sanderson', age: 42, id: '2'},
  {name: 'Terry Pratchett', age: 66, id: '3'}
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
          type: AuthorType,
          resolve (parent, args) {
            // return _.find(authors, {id: parent.authorID})
          }
        }
    })
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    book: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // return _.filter(books, {authorID: parent.id})
      }
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id:{type: GraphQLID}},
      resolve(parent, args){
        // code to get data from db/other source
        // return _.find(books, {id: args.id})
        //or use vanilla js to look thru books dummy data and return the object with that id prop
      }
    },
    author: {
      type: AuthorType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        // return _.find(authors, {id: args.id})
      }
    },
    books: {
      type: GraphQLList(BookType),
      resolve(parent, args) {
        // return books
      }
    },
    authors: {
      type: GraphQLList(AuthorType),
      resolve() {
        // return authors
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
      },
      resolve(parent, args) {
        new Author({
          name: args.name,
          age: args.age
        }).save()
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        authorID: {type: GraphQLString}
      },
      resolve(parent, args) {
        new Book ({
          name: args.name,
          genre: args.genre
          //something about the authorID....
        })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
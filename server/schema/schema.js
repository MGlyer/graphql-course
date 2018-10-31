const graphql = require('graphql')
const _ = require('lodash')

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull} = graphql
const { Book, Author } = require('../models/models.js')


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
            return Author.findById(parent.authorID)
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
        return Book.find({authorID: parent.id})
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
        return Book.findById(args.id)
      }
    },
    author: {
      type: AuthorType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        // return _.find(authors, {id: args.id})
        return Author.findById(args.id)
      }
    },
    books: {
      type: GraphQLList(BookType),
      resolve(parent, args) {
        // return books
        return Book.find({})
      }
    },
    authors: {
      type: GraphQLList(AuthorType),
      resolve() {
        // return authors
        return Author.find({})
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
        name: {type: GraphQLNonNull(GraphQLString)},
        age: {type: GraphQLNonNull(GraphQLInt)}
      },
      resolve(parent, args) {
        return new Author({
          name: args.name,
          age: args.age
        }).save()
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: {type: GraphQLNonNull(GraphQLString)},
        genre: {type: GraphQLNonNull(GraphQLString)},
        authorName: {type: GraphQLNonNull(GraphQLID)}
      },
      resolve(parent, args) {
        Author.findOne({name: args.authorName}, (err, docs) => {
          if (err) console.log(err)
          else {
            let book = new Book ({
              name: args.name,
              genre: args.genre, 
              authorID: docs._id
            })
            return book.save()
          }
        })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
const { gql } = require('apollo-boost')

const getBookQuery = gql`
  {
    books{
      name
      genre
      id
    }
  }
`

const getAuthorQuery = gql`
  {
    authors{
      name
      id
    }
  }
`

const addBookMutation = gql`
  mutation {
    addBook(name: "", genre: "", author: "") {
      name
      id
    }
  }
`


module.exports = {
  getBookQuery,
  getAuthorQuery,
  addBookMutation
}
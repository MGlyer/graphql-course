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
  mutation($name: String!, $genre: String!, $author: String!) {
    addBook(name: $name, genre: $genre, authorName: $author) {
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
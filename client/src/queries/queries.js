const { gql } = require('apollo-boost')
const getBooksQuery = gql`
{
  books{
    name
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

const getBookQuery = gql`
    query($id: ID) {
      book(id: $id){
        id
        name
        genre
        author{
          id
          name
          age
          book{
            name
            id
          }
        }
      }
    }
`


module.exports = {
  getBooksQuery,
  getAuthorQuery,
  addBookMutation,
  getBookQuery
}
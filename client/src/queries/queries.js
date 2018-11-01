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


module.exports = {
  getBookQuery,
  getAuthorQuery
}
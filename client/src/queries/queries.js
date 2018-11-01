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
    }
  }
`


module.exports = {
  getBookQuery,
  getAuthorQuery
}
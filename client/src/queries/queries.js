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


module.exports = {
  getBookQuery
}
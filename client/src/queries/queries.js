const { gql } = require('apollo-boost')

const getBookQuery = gql`
  {
    books{
      name
      genre
    }
  }
`


module.exports = {
  getBookQuery
}
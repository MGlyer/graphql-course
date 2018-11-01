import React from 'react'
import { getBookQuery } from './../queries/queries.js'
import { graphql } from 'react-apollo'

class BookList extends React.Component {
  state = {
    books: []
  }
  
  render() {
    return ( 
    <div>
      <ul id = 'book-list' >
        {this.props.data.loading ? 
        <div>Loading...</div>
        : 
        this.props.data.books.map((book) => {
          return (
            <li key = {book.id}>{book.name}</li>
          )
        })}
      </ul> 
    </div>
    )
  }
}

export default graphql(getBookQuery)(BookList)
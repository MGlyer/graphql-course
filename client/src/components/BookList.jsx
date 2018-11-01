import React from 'react'
import { getBookQuery } from './../queries/queries.js'
import { graphql } from 'react-apollo'

class BookList extends React.Component {
  state = {
    books: this.props.data.books || []
  }

  render() {
    return ( 
    <div>
      <ul id = 'book-list' >
        <li>Book name</li>
        {this.props.data.books ? 
        this.props.data.books.map((book) => {
          return (
            <li>{book.name}</li>
          )
        })
        : null}
      </ul> 
    </div>
    )
  }
}

export default graphql(getBookQuery)(BookList)
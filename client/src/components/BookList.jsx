import React from 'react'
import { gql } from 'apollo-boost'

class BookList extends React.Component {
  state = {
    //
  }

  render() {
    return ( 
    <div>
      <ul id = 'book-list' >
        <li>Book name</li>
      </ul> 
    </div>
    )
  }
}

export default BookList
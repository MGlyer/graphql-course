import React from 'react'
import { getBookQuery } from './../queries/queries.js'
import { graphql } from 'react-apollo'

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

export default graphql(getBookQuery)(BookList)
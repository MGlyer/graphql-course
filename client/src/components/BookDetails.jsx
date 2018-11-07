import React from 'react'
import { graphql, compose } from 'react-apollo'
import { getBookQuery } from '../queries/queries.js'

class BookDetails extends React.Component {
  state = {
    //
  }

  render() {
    var book = this.props.data.book || null
    if (book === null) {
      return(
        null
      )
    } else {
      return(
        <div>
          <p>Book Name: {book.name} </p>
          <p>Genre: {book.genre} </p>
          <p>Author:  {book.author.name} </p>
          <p>Author Age: {book.author.age} </p>
          <div>
            <p>Other books by this author: </p>
            <ul>
              {book.author.book.map((otherBook) => {
                return(
                  <li>{otherBook.name}</li>
                )
              })}
            </ul>
          </div>
        </div>
      )
    }
  }

}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails)
// export default BookDetails
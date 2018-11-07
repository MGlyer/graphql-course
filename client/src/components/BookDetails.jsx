import React from 'react'
import { graphql, compose } from 'react-apollo'
import { getBookQuery } from '../queries/queries.js'

class BookDetails extends React.Component {
  state = {
    //
  }

  render() {
    var book = this.props.data.book || null
    return (
      <div>
        {this.props.data.book === null ? 
          null :
          <p>Book Name: {book.name}</p>
        }
      </div>
    )
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
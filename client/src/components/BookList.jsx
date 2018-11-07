import React from 'react'
import { getBooksQuery } from './../queries/queries.js'
import { graphql } from 'react-apollo'
import BookDetails from "./BookDetails.jsx"

class BookList extends React.Component {
  state = {
    books: [],
    selected: null
  }
  handleSelectBook = this.handleSelectBook.bind(this)

  handleSelectBook(id) {
    console.log(id)
    this.setState({selected: id})
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
            <li key = {book.id} onClick={() => this.handleSelectBook(book.id)} >{book.name}</li>
          )
        })}
      </ul> 

      <BookDetails bookId = {this.state.selected} />
    </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList)
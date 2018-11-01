import React from 'react'
import { getAuthorQuery, addBookMutation } from './../queries/queries.js'
import { graphql, compose } from 'react-apollo'

class AddBook extends React.Component {
  state = {
    selectedAuthor: '',
    bookName: '',
    genreName: ''
  }
  changeAuthor = this.changeAuthor.bind(this)
  handleTextChange = this.handleTextChange.bind(this)
  handleSubmit = this.handleSubmit.bind(this)

  changeAuthor(e) {
    e.preventDefault
    this.setState({selectedAuthor: e.target.value})
  }

  handleTextChange(e) {
    let key = e.target.className
    this.setState({[key]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >

          <div className="field">
            <label>Book name:  </label>
            <input type="text" className="bookName" onChange={this.handleTextChange} />
          </div>

          <div className="field">
            <label>Genre:  </label>
            <input type="text" className="genreName" onChange={this.handleTextChange}/>
          </div>

          <div className="field">
            <label>Author:  </label>
            <select onChange={this.changeAuthor}>
              <option>Select Author</option>
              {this.props.data.loading ?
              <option>loading authors...</option>
              :
              this.props.data.authors.map((author) => {
                return(
                  <option value={author.name} key= {author.id}>{author.name}</option>
                )
              })}
              
            </select>
          </div>
        </form>

        <button>+</button>
      </div>
    )
  }
}

export default compose(
  graphql(getAuthorQuery, {name: "getAuthorQuery"}),
  graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook)
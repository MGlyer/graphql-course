import React from 'react'
import { getAuthorQuery } from './../queries/queries.js'
import { graphql } from 'react-apollo'

class AddBook extends React.Component {
  state = {
    selectedAuthor: '',
    bookName: '',
    genreName: ''
  }
  changeAuthor = this.changeAuthor.bind(this)
  handleTextChange = this.handleTextChange.bind(this)

  changeAuthor(e) {
    e.preventDefault
    this.setState({selectedAuthor: e.target.value})
  }

  handleTextChange(e) {
    e.preventDefault
    let key = e.target.className
    this.setState({[key]: e.target.value})
  }

  render() {
    return(
      <div>
        <form>

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

export default graphql(getAuthorQuery)(AddBook)
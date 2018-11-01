import React from 'react'
import { getAuthorQuery } from './../queries/queries.js'
import { graphql } from 'react-apollo'

class AddBook extends React.Component {
  state = {
    //
  }

  render() {
    return(
      <div>
        <form>

          <div className="field">
            <label>Book name:</label>
            <input type="text"/>
          </div>

          <div className="field">
            <label>Genre:</label>
            <input type="text"/>
          </div>

          <div className="field">
            <label>Author:</label>
            <select>
              <option>Select Author</option>
            </select>
          </div>
        </form>

        <button>+</button>
      </div>
    )
  }
}

export default graphql(getAuthorQuery)(AddBook)
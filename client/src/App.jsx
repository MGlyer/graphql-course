import React from 'react'
import ReactDOM from 'react-dom'
import BookList from './components/BookList.jsx'
import AuthorList from './components/AuthorList.jsx'

class App extends React.Component {
    state = {
        //
    }

    render() {
        return(
            <div>
                <h1 className="title">GraphQL Course: Reading List</h1>
                <div className="bookList">
                  <BookList />
                </div>
                <div className="authorList">
                  <AuthorList />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
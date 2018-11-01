import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

//components
import BookList from './components/BookList.jsx'
import AuthorList from './components/AuthorList.jsx'
import AddBook from './components/AddBook.jsx'

//apollo setup
const courseClient = new ApolloClient({
  uri: 'http://localhost:8084/graphql'
})


class App extends React.Component {
    state = {
        //
    }

    render() {
        return(
          <ApolloProvider client={courseClient}>
            <div>
                <h1 className="title">GraphQL Course: Reading List</h1>
                <div className="bookList">
                  <BookList />
                </div>
                <div className="authorList">
                  <AuthorList />
                </div>

                <div className="addBook">
                  <AddBook />
                </div>
            </div>
          </ApolloProvider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
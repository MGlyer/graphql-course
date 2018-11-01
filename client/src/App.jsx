import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    state = {
        //
    }

    render() {
        return(
            <div>
                <p>I'm on the page!</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
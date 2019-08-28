import React from 'react'
import { hot } from 'react-hot-loader'

const count_red = {
  color: 'red'
}

const count_green = {
  color: 'blue'
}
class App extends React.Component {
  state = {
    count: 0
  }
  render() {
    return (
      <React.Fragment>
        <h1>
          {' '}
          Hello World there it is commit should be rejected ok, state should not
          be lost
        </h1>
        <button
          onClick={() => {
            this.setState(prevState => {
              return { count: prevState.count + 1 }
            })
          }}
        >
          {' '}
          Add{' '}
        </button>
        <button
          onClick={() => {
            this.setState(prevState => {
              return { count: prevState.count - 1 }
            })
          }}
        >
          {' '}
          Sub{' '}
        </button>
        <h2 style={this.state.count > 5 ? count_green : count_red}>
          Count = {this.state.count}
        </h2>
      </React.Fragment>
    )
  }
}

const hotFunction = hot(module)
export default hotFunction(App)

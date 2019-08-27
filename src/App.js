import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1> Hello World there it is</h1>
      </React.Fragment>
    )
  }
}

const hotFunction = hot(module)
export default hotFunction(App)

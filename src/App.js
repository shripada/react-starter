import React from 'react'
import { hot } from 'react-hot-loader'
const Warning = React.lazy(() => import('./warning'))

class App extends React.Component {
  state = {
    count: 0
  }

  render() {
    return (
      <React.Fragment>
        <h1> Hello World New from WEBPACK - hot</h1>
        <h2 className={this.state.count > 10 ? 'warning' : null}>
          {' '}
          Count: {this.state.count}
          {this.state.count > 10 ? (
            <React.Suspense fallback={null}>
              <Warning />
            </React.Suspense>
          ) : null}
        </h2>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          +
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          -
        </button>
      </React.Fragment>
    )
  }
}

const hotFunction = hot(module)
export default hotFunction(App)

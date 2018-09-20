import React from 'react'
import { render } from 'react-dom'
import Flipcard from '@kennethormandy/react-flipcard'

// Import minimal required styles however you’d like
import '@kennethormandy/react-flipcard/dist/Flipcard.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      flipped: false,
    }
  }

  render() {
    return (
      <div>
        <button onClick={e => this.setState({ flipped: !this.state.flipped })}>
          Flip
        </button>
        <Flipcard type="horizontal" flipped={this.state.flipped}>
          <h1>One</h1>
          <h1>Two</h1>
        </Flipcard>
      </div>
    )
  }
}

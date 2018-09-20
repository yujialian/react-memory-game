import React from 'react';
import { render } from 'react-dom';
import Flipcard from '@kennethormandy/react-flipcard';
import '@kennethormandy/react-flipcard/dist/Flipcard.css';
import './grid.css';


// Import minimal required styles however you’d like
import '@kennethormandy/react-flipcard/dist/Flipcard.css'

export default class Grid extends React.Component {
  constructor() {
    super()

    this.state = {
      flipped: false,
    }
  }

  render() {
    return (
      <div className="charCard">
		<Flipcard flipped={this.state.flipped} onClick={e => this.setState({ flipped: !this.state.flipped })}>
   			<div className='front'>
      			<h2>GUESS</h2>
   			</div>
   			<div className='front'>
      			<h2>2</h2>
    		</div>
	</Flipcard>
      </div>
    );
  };
}

import React from 'react';
import {render} from 'react-dom';
import Flipcard from '@kennethormandy/react-flipcard';
import '@kennethormandy/react-flipcard/dist/Flipcard.css';
import './css/grid.css';

// Import minimal required styles however you’d like
import '@kennethormandy/react-flipcard/dist/Flipcard.css'

export default class Grid extends React.Component {

  render() {
    const {isComparing, guessed, selectedCard, word} = this.props;
    return (<div className="charCard" onClick={selectedCard}>
      <Flipcard flipped={isComparing || guessed}>
        <div className='front'>
          <img className="frontImg" style={{
              width: 125,
              height: 125
            }} src={require("./img/illumio.png")} alt="Guess"/>
        </div>
        <div className='back'>
          <h2 style={{color: "white"}}>{word}</h2>
        </div>
      </Flipcard>
    </div>);
  };
}

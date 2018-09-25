import React from 'react';
import Grid from './grid';
import _ from 'lodash';
import './css/game_start.css'

export default class GameStart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {cardsInfo, selectedIndex, selectedCard} = this.props;
    return (<div className='gameBoard'>
      {
        cardsInfo.map((cardInfo, index) => {
          const comparing = selectedIndex.indexOf(index) > -1
          return (<Grid word={cardInfo.character} isComparing={comparing} key={index} selectedCard={() => selectedCard(index)} guessed={cardInfo.guessed}/>)
        })
      }
    </div>);
  }
}
